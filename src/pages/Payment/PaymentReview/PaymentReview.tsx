import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import { FormSectionHeader } from "../../../components/FormSectionHeader/FormSectionHeader";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { ReviewSection } from "./styles";
import { formatCurrency } from "../../../shared/util";
import { PaymentReviewProps } from "./types";

function PaymentReview({ expanded }: PaymentReviewProps) {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  if (!userData) {
    return null;
  }

  const totalDue = formatCurrency(userData.totalDue);

  const handlePayClick = () => navigate("/thank-you");

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
      <div>content</div>
      <Button onClick={handlePayClick}>{`Pay ${totalDue}`}</Button>
    </ReviewSection>
  );
}

export { PaymentReview };
