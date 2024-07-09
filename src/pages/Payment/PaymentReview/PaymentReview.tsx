import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import { FormSectionHeader } from "../../../components/FormSectionHeader/FormSectionHeader";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import {
  PaymentInfo,
  PaymentMethod,
  ReviewContent,
  ReviewSection,
  ReviewText,
} from "./styles";
import { formatCurrency } from "../../../shared/util";
import { PaymentReviewProps } from "./types";

function PaymentReview({ expanded, payment }: PaymentReviewProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  if (!userData) {
    return null;
  }

  const totalDue = formatCurrency(userData.totalDue);
  const lastFourDigits = payment.cardNumber?.toString().slice(-4);

  const handlePayClick = async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      const response = await fetch("/pay", {
        method: "POST",
        body: JSON.stringify(payment),
      });

      if (response.ok) {
        navigate("/thank-you");
      } else {
        setHasError(true);
      }
    } catch (_) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const Content = (
    <ReviewContent>
      <ReviewText $size="medium">
        You're about to make a payment of <strong>{totalDue}</strong>
      </ReviewText>
      <PaymentInfo>
        <PaymentMethod $size="extraSmall" $bold>
          Payment method
        </PaymentMethod>
        <ReviewText $size="extraSmall">
          {/* TODO add card logo */}
          Card ending in &bull;&bull;&bull;&bull;{lastFourDigits}
        </ReviewText>
      </PaymentInfo>
    </ReviewContent>
  );

  return (
    <ReviewSection
      expanded={expanded}
      header={
        <FormSectionHeader
          sectionNumber={2}
          status={expanded ? "active" : "disabled"}
        >
          Review and pay
        </FormSectionHeader>
      }
    >
      {isLoading ? (
        <p>Processing payment...</p>
      ) : (
        <>
          {Content}
          {hasError && <p>There was an issue processing your payment</p>}
          <Button onClick={handlePayClick}>{`Pay ${totalDue}`}</Button>
        </>
      )}
    </ReviewSection>
  );
}

export { PaymentReview };
