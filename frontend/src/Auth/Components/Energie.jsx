import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Paper,
  Dialog,
  DialogContent,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import axios from "axios";

const Styles = {
  contenuEtape: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "24px",
    textAlign: "left",
    color: "#003049",
  },
  ajouterActiviteButton: {
    width: "150px",
    height: "32px",
    gap: "0px",
    borderRadius: "10px 10px 10px 10px",
    border: "1px solid #003049",
    background: "#FFFFFF",
    color: "#003049",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "16px",
    textAlign: "center",
  },
  customSelect: {
    fontFamily: "Inter, sans-serif",
    height: "45px",
    width: "100%",
    padding: "10px",
    borderRadius: "15px",
    border: "0px solid #003049",
    backgroundColor: "#EEF5FC",
    outline: "none",
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23003049'><path d='M7 10l5 5 5-5z'/></svg>`
    )}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px top 50%",
    backgroundSize: "12px",
    cursor: "pointer",
    color: "#4D4D4D",
  },
  customTitle: {
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "24px",
    textAlign: "left",
    color: "#212121",
  },
  rechercheButton: {
    fontFamily: "Inter, sans-serif",
    width: "100%",
    height: "48px",
    padding: "14px 32px 14px 32px",
    gap: "10px",
    borderRadius: "15px 15px 15px 15px",
    background: "linear-gradient(117.07deg, #003049 0%, #2094F3 301.94%)",
    color: "white",
  },
  annulerButton: {
    fontFamily: "Inter, sans-serif",
    border: "1px solid #D62828",
    borderRadius: "15px",
    backgroundColor: "#FFFFFF",
    color: "#D62828",
    height: "48px",
  },
  validerButton: {
    fontFamily: "Inter, sans-serif",
    background: "#003049",
    borderRadius: "15px",
    height: "48px",
  },
  Button_Link_Medium: {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "20px",
    textAlign: "center",
  },
  rechercherText: {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "20px",
    textAlign: "center",
    textTransform: "none",
  },
  annulerText: {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "20px",
    textAlign: "center",
    color: "#D62828",
    textTransform: "none",
  },
  validerText: {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "20px",
    textAlign: "center",
    textTransform: "none",
  },
  ajouterText: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "16px",
    textAlign: "center",
    color: "#003049",
    textTransform: "none",
  },
};

const energieList = [
  {
    label: "Émissions indirectes liées à la consommation d'électricité",
    dialogOptions: [{ label: "Electricité", value: 1 }],
  },
  {
    label:
      "Émissions indirectes liées à la consommation d'énergie autre que l'électricité",
    dialogOptions: [{ label: "Réseaux de chaleur / froid", value: 1 }],
  },
];

function Energie() {
  const handleClickOpen = (index) => {
    setSelectedEmissionIndex(index);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  const [selectedEmissionIndex, setSelectedEmissionIndex] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState("");
  const [nextLevelCategories, setnextLevelCategories] = useState([]);
  const [nextLevelCategories2, setnextLevelCategories2] = useState([]);
  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");
  const [category3, setCategory3] = useState("");
  const [fe, setFe] = useState();
  const handleCategory2 = async (event) => {
    try {
      setCategory1(event.target.value);
      const url = "http://localhost:3000/api/categories/nextCategories";
      const { data: res } = await axios.post(url, {
        userSelectedCategories: [event.target.value],
      });
      setnextLevelCategories(res.nextCategories);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const handleCategory3 = async (event) => {
    try {
      setCategory2(event.target.value);
      const url = "http://localhost:3000/api/categories/nextCategories";
      const { data: res } = await axios.post(url, {
        userSelectedCategories: [category1, event.target.value],
      });
      setnextLevelCategories2(res.nextCategories);
      setFe(res.matchingDocuments);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  const handleFe = async (event) => {
    try {
      setCategory3(event.target.value);
      const url = "http://localhost:3000/api/categories/nextCategories";
      const { data: res } = await axios.post(url, {
        userSelectedCategories: [category1, category2, event.target.value],
      });
      setData([category1, category2, category3]);
      setFe(res.matchingDocuments);
      console.log(data);
      console.log(fe);
    } catch {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      {energieList.map((emission, index) => (
        <Box key={index} p={2} bgcolor={"#F0F2F7"} mb={2} borderRadius={4}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={9}>
              <Typography variant="h6" gutterBottom style={Styles.contenuEtape}>
                {emission.label}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
              <Button
                style={Styles.ajouterActiviteButton}
                onClick={() => handleClickOpen(index)}
              >
                <Typography style={Styles.ajouterText}>
                  Ajouter Activité
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      ))}

      <Dialog
        open={openDialog}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        borderRadius={15}
      >
        <DialogContent>
          <Grid
            container
            spacing={2}
            sx={{ paddingLeft: "16px", paddingRight: "16px" }}
          >
            {selectedEmissionIndex !== null && (
              <Grid item xs={12} md={12}>
                <Typography variant="h6" style={Styles.customTitle}>
                  Catégorie 1
                </Typography>
                <select
                  name="category1"
                  style={{ ...Styles.customSelect, width: "100%" }}
                  onChange={handleCategory2}
                >
                  <option disabled selected>
                    Selectionner une catégorie
                  </option>
                  {selectedEmissionIndex !== null &&
                    energieList[selectedEmissionIndex].dialogOptions.map(
                      (option, index) => (
                        <option key={index} value={option.label}>
                          {option.label}
                        </option>
                      )
                    )}
                </select>
              </Grid>
            )}
            <Grid item xs={12} md={12}>
              <Typography variant="h6" style={Styles.customTitle}>
                Catégorie 2
              </Typography>
              <select
                style={{ ...Styles.customSelect, width: "100%" }}
                onChange={handleCategory3}
              >
                <option disabled selected>
                  Selectionner une catégorie
                </option>
                {nextLevelCategories.map((index) => (
                  <option key={index} value={index}>
                    {index}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid item xs={12} md={12}>
              {error}
              <Typography variant="h6" style={Styles.customTitle}>
                Catégorie 3
              </Typography>
              <select
                style={{ ...Styles.customSelect, width: "100%" }}
                onChange={handleFe}
              >
                <option disabled selected>
                  Selectionner une catégorie
                </option>
                {nextLevelCategories2.map((index) => (
                  <option key={index} value={index}>
                    {index}
                  </option>
                ))}
              </select>
            </Grid>

            <Grid item xs={12} md={12}>
              <Button style={Styles.rechercheButton}>
                <Typography style={Styles.rechercherText}>
                  Rechercher
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} md={12} style={{ overflow: "auto" }}>
              <Paper
                elevation={0}
                style={{
                  height: "150px",
                  borderRadius: "15px",
                  padding: "20px",
                  backgroundColor: "#F2F4F8",
                }}
              >
                <FormControl>
                  <FormLabel>Emissions Fe</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={""} // Assuming selectedOption is the state for the selected radio button
                    name="radio-buttons-group"
                    onChange={(e) => {
                      console.log(e.target.value); // Access the selected value using e.target.value
                    }}
                  >
                    {fe &&
                      fe
                        .filter(
                          (item, index, self) =>
                            index ===
                            self.findIndex(
                              (t) => t.identifier === item.identifier
                            )
                        )
                        .map((item, index) => {
                          if (item.elementType === "Elément") {
                            return (
                              <FormControlLabel
                                key={index}
                                value={item._id} // Adjust this value as needed
                                control={<Radio />} // Using Radio component here
                                label={item.name + item.description} // Adjust this label as needed
                              />
                            );
                          }
                          return null; // Skip rendering if condition doesn't match
                        })}
                  </RadioGroup>
                </FormControl>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid container spacing={3}>
                <Grid item xs={6} md={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    style={{ ...Styles.annulerButton }}
                  >
                    <Typography style={Styles.annulerText}>Annuler</Typography>
                  </Button>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    style={{ ...Styles.validerButton }}
                    onClick={handleClose}
                  >
                    <Typography style={Styles.validerText}>Valider</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Energie;