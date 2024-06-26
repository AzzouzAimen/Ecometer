import { StepConnector, styled } from "@mui/material";
import { stepConnectorClasses } from "@mui/material/StepConnector";

// Définition du StepConnector personnalisé
const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#C92C39",

      // Couleur de la ligne lorsque l'étape est active
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#C92C39",
      // Couleur de la ligne lorsque l'étape est complétée
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#eaeaf0",
    borderTopWidth: 4,
    borderRadius: 5,
    marginLeft: "2vh",
    marginRight: "2vh",
    marginTop: "0.8vh",

    //make the height bigger
  },
}));

export default CustomStepConnector;
