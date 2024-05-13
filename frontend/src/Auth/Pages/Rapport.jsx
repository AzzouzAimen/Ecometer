import { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import AppBarComponent from "../Components/AppBarComponent";
import SideBar from "../Components/SideBar";
import BilanDetails from "../Components/BilanDetails";
import { PieChart  } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts';
import { BarChart as BarChartIcon, PieChart as PieChartIcon } from '@mui/icons-material'; 
import axios from "axios";
const Styles = {
  Detail: {
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    textAlign: "left",
    marginTop: "5px",
  },
};

const Rapport = () => {
  const [showFirstMain, setShowFirstMain] = useState(true);
  const [total, setTotal] = useState(0);
  const [year, setYear] = useState(2024);
  const [scope1, setScope1] = useState(0);
  const [scope2, setScope2] = useState(0);
  const [scope3, setScope3] = useState(0);
  const [showItem1, setShowItem1] = useState(true);

  const toggleItem = () => {
    setShowItem1(!showItem1);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/bilans/663423f16e90cffe89fdd32a/2024"
        );
        localStorage.setItem("ClientBilan", JSON.stringify(response.data));
        console.log(response.data);
        const data = response.data;
        data.emissionPosts.map((element) => {
          if (
            element.index === 1.1 ||
            element.index === 1.2 ||
            element.index === 1.3 ||
            element.index === 1.4 ||
            element.index === 1.5
          ) {
            console.log(element.emissions);
            setScope1((prev) => prev + element.emissions);
          } else if (element.index === 2.1 || element.index === 2.2) {
            setScope2((prev) => prev + element.emissions);
          } else {
            setScope3((prev) => prev + element.emissions);
          }
        });
        setTotal(data.totalEmissions);
        setYear(data.year);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Grid container>
      {/* Sidebar */}
      <Grid
        item
        md={2.1}
        sx={{ minHeight: "100vh", display: { xs: "none", md: "block" } }}
      >
        <SideBar />
      </Grid>

      {/* Main Content */}
      <Grid item md={9.9} xs={12}>
        <Grid container height={"auto"}>
          {/* Header */}
          <Grid
            item
            height={"64px"}
            xs={12}
            sx={{ fontFamily: "Inter, sans-serif" }}
          >
            <AppBarComponent
              title={showFirstMain ? "Rapport" : "Rapport Detaillé"}
            />
          </Grid>

          {/* Main Content Body */}
          {showFirstMain && (
            <Grid
              item
              xs={12}
              sx={{
                background: "#F2F4F8",
                minHeight: "calc(100vh - 64px)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Grid container justifyContent={"center"} marginTop={"50px"}>
                <Grid item md={10}>
                  <Paper
                    sx={{
                      padding: "60px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      borderRadius: "15px",
                    }}
                  >
                    <Grid container spacing={2}>
                      {/* Titre Rapport annuel d'émissions 2024 */}
                      <Grid item xs={12} md={6}>
                        <Typography
                          variant="h4"
                          sx={{
                            textAlign: { md: "start", xs: "center" },
                            marginBottom: "20px",
                          }}
                        >
                          Rapport annuel d&apos;émissions {year}
                        </Typography>
                      </Grid>

                      {/* Bouton Voir plus de détails */}
                      <Grid
                        item
                        md={6}
                        xs={12}
                        sx={{
                          textAlign: { md: "end", xs: "center" },
                          marginBottom: { xs: "20px" },
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ color: "#F77F00" }}
                          onClick={() => setShowFirstMain(false)}
                        >
                          Voir plus de détails
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} justifyContent="center">
                      {/* Premier Grid Item */}
                      <Grid item md={6} xs={12}>
                        <Paper
                          elevation={3}
                          sx={{
                            padding: "36px",
                            paddingTop: "20px",
                            paddingBottom: "20px",
                            borderRadius: "15px",
                            background: "#FFD5D5",
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              textAlign: { xs: "center", md: "start" },
                              color: "#D62828",
                            }}
                          >
                            émissions totales
                          </Typography>
                          <Grid container alignItems="center">
                            <Typography
                              variant="h3"
                              sx={{
                                textAlign: { xs: "center", md: "start" },
                                marginRight: { md: "25px" },
                              }}
                            >
                              {(total / 100).toFixed(2)}
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{
                                textAlign: { xs: "center", md: "start" },
                                color: "#000000",
                              }}
                            >
                              tCO2e
                            </Typography>
                          </Grid>
                        </Paper>
                      </Grid>

                      {/* Deuxième Grid Item */}
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2" sx={Styles.Detail}>
                          Votre émissions 2024 ont été ventilées par scopes et
                          catégories conformément au GHG Corporate Standard. Les
                          résultats sont également ventilés par trimestre pour
                          comprendre l’évolution de votre empreinte carbone au
                          cours de l’année 2022.
                        </Typography>
                      </Grid>
                    </Grid>

                    {/* Nouveau Grid Item pour contenir quatre sous-items */}
                    <Grid item xs={12} sx={{ marginTop: "4%" }}>
                      <Grid container spacing={2}>
                        {[1, 2, 3].map((item) => (
                          <Grid key={item} item xs={12} md={4}>
                            <Paper
                              elevation={3}
                              sx={{
                                padding: "4%",
                                paddingTop: "4%",
                                paddingBottom: "4%",
                                borderRadius: "15px",
                                background: "#FFD5D5",
                              }}
                            >
                              <Typography
                                variant="h5"
                                sx={{
                                  textAlign: { xs: "center", md: "start" },
                                  color: "#D62828",
                                }}
                              >
                                Scope {item}
                              </Typography>
                              <Grid container alignItems="center">
                                <Typography
                                  variant="h3"
                                  sx={{
                                    textAlign: { xs: "center", md: "start" },
                                    marginRight: { md: "25px" },
                                  }}
                                >
                                  {item === 1
                                    ? (scope1 / 100).toFixed(2)
                                    : item === 2
                                    ? (scope2 ).toFixed(2)
                                    : (scope3).toFixed(2)}
                                </Typography>
                                <Typography
                                  variant="h6"
                                  sx={{
                                    textAlign: { xs: "center", md: "start" },
                                    color: "#000000",
                                  }}
                                >
                                  tCO2e
                                </Typography>
                              </Grid>
                            </Paper>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <Grid container justifyContent="center" alignItems="center">
                        {showItem1 ? (
                          <Grid item md={6} xs={12} sx={{display : 'flex' , flexDirection : 'column' , justifyContent :"center"}}>
                           

                            <IconButton onClick={toggleItem}>
                              <PieChartIcon fontSize="large" style={{ marginRight: 10 }} /> 
                            </IconButton>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' ,alignItems : "center"}}> 
                                 <BarChart
                                    xAxis={[{ scaleType: 'band', data: ['Scope 1', 'Scope2', 'Scope 3'] }]}
                                    series={[{ data: [4, 0, 0] }, { data: [0, 6, 0] }, { data: [0, 0, 5] }]}
                                    colors={['#D62828', '#F77F00', '#FCBF49']}
                                    width={404}
                                    height={404}
                                    slotProps={{
                                      legend: {
                                        labelStyle: {
                                          tableLayout: 'fixed',
                                        },
                                        direction: 'row',
                                        position: {
                                          horizontal: 'middle',
                                          vertical: 'bottom',
                                        },
                                      },
                                    }}
                                  />
                            </div>
                          </Grid>
                        ) : (
                          <Grid item md={6} xs={12} sx={{display : 'flex' , flexDirection : 'column' , justifyContent :"center"}}>
                            {/* Contenu de l'item 2 */}
                            <IconButton onClick={toggleItem}>
                              <BarChartIcon fontSize="large" style={{ marginRight: 10 }} />
                            </IconButton>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}> 
                                <PieChart
                                  series={[
                                    {
                                      data: [
                                        { id: 0, value: 10, label: 'Scope 1' },
                                        { id: 1, value: 15, label: 'Scope 2' },
                                        { id: 2, value: 20, label: 'Scope 3' },
                                      ],
                                    },
                                  ]}
                                  colors={['#D62828', '#F77F00', '#FCBF49']}
                                  width={404}
                                  height={404}
                                  slotProps={{
                                    legend: {
                                      labelStyle: {
                                        tableLayout: 'fixed',
                                      },
                                      direction: 'row',
                                      position: {
                                        horizontal: 'middle',
                                        vertical: 'bottom',
                                      },
                                    },
                                  }}
                                />
                              </div>
                          </Grid>
                        )}
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          )}

          {/* Main Content Body */}
          {!showFirstMain && <BilanDetails />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Rapport;
