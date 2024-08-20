"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  styled,
  Stack,
  Grid,
  Box,
  Autocomplete,
} from "@mui/material";
import { PDFDocument, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { Roboto } from "next/font/google";
import "../../../css/globals.css";
import Image from "next/image";

export default function AgregarLicenciaSanitaria() {
  const [generatedPdf, setGeneratedPdf] = useState(null);
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: "#10754a",
    "&:hover": {
      backgroundColor: "#D6D6D6",
    },
  }));

  const handleTipoDeServicio = (event, value) => {
    if (value) {
      setTipoDeServicio(value);
    } else {
      setTipoDeServicio("");
    }
  };

  const PlagasControladasArray = [
    "Ratas",
    "Aracnidos",
    "Cucarachas",
    "Palomas",
  ]; //aqui se van a consumir los tipos de empresasa que dejemos
  const TipoDeServicioArray = [
    "Aspercion",
    "Captura De Aves",
    "Cebado con Gel",
    "Cebado con Granulos",
  ];

  //constantes inputs
  const [areasTratadas, setAreasTratadas] = useState("");
  const [poblacion, setPoblacion] = useState("");
  const [tipoDeServicio, setTipoDeServicio] = useState("");

  const [plagasControladas, setPlagasControladas] = useState("");
  const [plagas2Controladas, setPlagas2Controladas] = useState("");
  const [plagas3Controladas, setPlagas3Controladas] = useState("");
  const [plagas4Controladas, setPlagas4Controladas] = useState("");
  const [plagas5Controladas, setPlagas5Controladas] = useState("");

  let [productoSeleccionado, setProductoSeleccionado] = useState("");
  let [producto2Seleccionado, setProducto2Seleccionado] = useState("");
  let [producto3Seleccionado, setProducto3Seleccionado] = useState("");
  let [producto4Seleccionado, setProducto4Seleccionado] = useState("");
  let [producto5Seleccionado, setProducto5Seleccionado] = useState("");

  let opcionesProductos = [
    { value: "RSCO-URB-INAC-102U-303-032-10", label: "AGITA" },
    { value: "Producto 2", label: "Nombre del Producto 2" },
    { value: "Producto 3", label: "Nombre del Producto 3" },
  ];
  let opcionesPlagas = [
    { value: "RSCO-URB-INAC-102U-303-032-10", label: "AGITA" },
    { value: "Producto 2", label: "Nombre del Producto 2" },
    { value: "Producto 3", label: "Nombre del Producto 3" },
  ];

  const handlePlagasChange = (event, value) => {
    if (value) {
      setPlagasControladas(value);
    } else {
      setPlagasControladas("");
    }
  };
  const handlePlagas2Change = (event, value) => {
    if (value) {
      setPlagas2Controladas(value);
    } else {
      setPlagas2Controladas("");
    }
  };
  const handlePlagas3Change = (event, value) => {
    if (value) {
      setPlagas3Controladas(value);
    } else {
      setPlagas3Controladas("");
    }
  };
  const handlePlagas4Change = (event, value) => {
    if (value) {
      setPlagas4Controladas(value);
    } else {
      setPlagas4Controladas("");
    }
  };
  const handlePlagas5Change = (event, value) => {
    if (value) {
      setPlagas5Controladas(value);
    } else {
      setPlagas5Controladas("");
    }
  };

  const [showInput, setShowInput] = useState(0);
  const [showInput2, setShowInput2] = useState(0);

  const handleProductoSeleccionadoChange = (event, value) => {
    if (value) {
      let res = value.value;
      setProductoSeleccionado(res);
    } else {
      setProductoSeleccionado("");
    }
  };
  const handleProducto2SeleccionadoChange = (event, value) => {
    let res = value.value;
    if (value) {
      setProducto2Seleccionado(res);
    } else {
      setProducto2Seleccionado("");
    }
  };
  const handleProducto3SeleccionadoChange = (event, value) => {
    let res = value.value;

    if (value) {
      setProducto3Seleccionado(res);
    } else {
      setProducto3Seleccionado("");
    }
  };
  const handleProducto4SeleccionadoChange = (event, value) => {
    if (value) {
      let res = value.value;
      setProducto4Seleccionado(res);
    } else {
      setProducto4Seleccionado("");
    }
  };
  const handleProducto5SeleccionadoChange = (event, value) => {
    let res = value.value;

    if (value) {
      setProducto5Seleccionado(res);
    } else {
      setProducto5Seleccionado("");
    }
  };
  //Aqui con esta url estamos guardando los datos }
  //Ojo esta es la url que tenemos que mandar para la base de datos para poder descargar
  const handlePdf = async (event) => {
    event.preventDefault();
    try {
      const url = "https://res.cloudinary.com/dpz2wx43s/image/upload/v1702705197/eduplanet/pdfs/x5gjh2vpnynghxcq8x10.pdf";
      const url2 = "https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf";
  
      const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
      const fontBytes = await fetch(url2).then((res) => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      pdfDoc.registerFontkit(fontkit);
      const customFont = await pdfDoc.embedFont(fontBytes);
  
      const { width, height } = firstPage.getSize();
      const nombre2 = "Farmacia Super super largo";
      const cadena2 = "PonienteSur ";
      let nombreWidth = nombre2.length;
      let cadenaWidth = cadena2.length;
  
      let textNWidth = customFont.widthOfTextAtSize(nombre2, nombreWidth);
      let textCWidth = customFont.widthOfTextAtSize(cadena2, cadenaWidth);
  
      firstPage.drawText(cadena2, { x: (width - textCWidth) / 2, y: 485, size: 20, font: customFont });
      firstPage.drawText(nombre2, { x: (width - textNWidth) / 2, y: 505, size: 20, font: customFont });
      firstPage.drawText(areasTratadas, { x: 100, y: 430, size: 10, font: customFont });
      firstPage.drawText(poblacion, { x: 90, y: 445, size: 10, font: customFont });
      firstPage.drawText(tipoDeServicio, { x: 100, y: 418, size: 10, font: customFont });
      firstPage.drawText("2da Aveninda Sur Poniente", { x: 70, y: 460, size: 10, font: customFont });
      firstPage.drawText("Copoya", { x: 280, y: 460, size: 10, font: customFont });
      firstPage.drawText("29100", { x: 450, y: 460, size: 10, font: customFont });
      firstPage.drawText(plagasControladas, { x: 120, y: 395, size: 10, font: customFont });
      firstPage.drawText(plagas2Controladas, { x: 180, y: 395, size: 10, font: customFont });
      firstPage.drawText(plagas3Controladas, { x: 240, y: 395, size: 10, font: customFont });
      firstPage.drawText(plagas4Controladas, { x: 300, y: 395, size: 10, font: customFont });
      firstPage.drawText(plagas5Controladas, { x: 360, y: 395, size: 10, font: customFont });
      firstPage.drawText("21/09/2023", { x: 55, y: 345, size: 10, font: customFont });
      firstPage.drawText("21/03/2024", { x: 415, y: 345, size: 10, font: customFont });
      firstPage.drawText("Productos Utilizados: ", { x: 10, y: 380, size: 10, font: customFont });
      firstPage.drawText(productoSeleccionado, { x: 110, y: 380, size: 8, font: customFont });
      firstPage.drawText(producto2Seleccionado, { x: 240, y: 380, size: 8, font: customFont });
      firstPage.drawText(producto3Seleccionado, { x: 370, y: 380, size: 8, font: customFont });
      firstPage.drawText(producto4Seleccionado, { x: 20, y: 368, size: 8, font: customFont });
      firstPage.drawText(producto5Seleccionado, { x: 150, y: 368, size: 8, font: customFont });
  
      const pdfBytes = await pdfDoc.save();
      setGeneratedPdf(pdfBytes);
  
      // Enviar el PDF a la API
      const formData = new FormData();
      formData.append("file", new Blob([pdfBytes], { type: "application/pdf" }), "documento.pdf");
  
      await fetch("http://localhost:8000/api/upload-file/", {
        method: "POST",
        body: formData,
      });
  
      console.log("PDF enviado correctamente");
    } catch (error) {
      console.error("Error al generar o enviar el PDF:", error);
    }
  };
  

  const handleSubmit = async (event) => {
    //fetch
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            margin: "0px",
            marginTop: "10px",
          }}
        >
          Licencia Sanitaria
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form className="containerAgregarClientesFondo">
          <Grid
            container
            direction={"row"}
            spacing={2}
            display={"flex"}
            justifyContent={"center"}
          >
            <Grid item>
              <Grid
                container
                direction={"row"}
                spacing={2}
                display={"flex"}
                justifyContent={"center"}
              >
                <Grid item xs={12} lg={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <h1
                      style={{
                        margin: "5px",
                      }}
                    >
                      Coca cola
                    </h1>
                    <h2
                      style={{
                        margin: "0px",
                      }}
                    >
                      Poniente
                    </h2>
                  </div>
                  <Box
                    sx={{ minWidth: 120 }}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      width={100}
                      height={100}
                      alt="imagen"
                      className="animalito"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                  <Grid
                    container
                    spacing={2}
                    direction={"row"}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <Grid
                      item
                      xs={12}
                      lg={6}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <TextField
                        type="text"
                        name="poblacion"
                        placeholder="Poblacion"
                        fullWidth
                        value={poblacion}
                        onChange={(event) => {
                          setPoblacion(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={6}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <TextField
                        type="text"
                        name="areasTratadas"
                        placeholder="Areas Tratadas"
                        fullWidth
                        value={areasTratadas}
                        onChange={(event) => {
                          setAreasTratadas(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Autocomplete
                        disablePortal
                        id="tipoDeServicio"
                        options={TipoDeServicioArray}
                        getOptionLabel={(option) =>
                          typeof option === "string" || option instanceof String
                            ? option
                            : ""
                        }
                        required
                        onChange={handleTipoDeServicio}
                        sx={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Tipos De Servicio" />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <Autocomplete
                        disablePortal
                        id="plagasControladas"
                        options={PlagasControladasArray}
                        getOptionLabel={(option) =>
                          typeof option === "string" || option instanceof String
                            ? option
                            : ""
                        }
                        required
                        value={plagasControladas}
                        onChange={handlePlagasChange}
                        sx={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Plagas Controladas" />
                        )}
                      />
                    </Grid>
                    {showInput2 > 0 && (
                      <Grid item xs={12} lg={6}>
                        <Autocomplete
                          disablePortal
                          id="plagasControladas"
                          options={PlagasControladasArray}
                          getOptionLabel={(option) =>
                            typeof option === "string" ||
                            option instanceof String
                              ? option
                              : ""
                          }
                          required
                          onChange={handlePlagas2Change}
                          sx={{ width: "100%" }}
                          renderInput={(params) => (
                            <TextField {...params} label="Plagas Controladas" />
                          )}
                        />
                      </Grid>
                    )}
                    {showInput2 > 1 && (
                      <Grid item xs={12} lg={6}>
                        <Autocomplete
                          disablePortal
                          id="plagasControladas"
                          options={PlagasControladasArray}
                          getOptionLabel={(option) =>
                            typeof option === "string" ||
                            option instanceof String
                              ? option
                              : ""
                          }
                          required
                          onChange={handlePlagas3Change}
                          sx={{ width: "100%" }}
                          renderInput={(params) => (
                            <TextField {...params} label="Plagas Controladas" />
                          )}
                        />
                      </Grid>
                    )}
                    {showInput2 > 2 && (
                      <Grid item xs={12} lg={6}>
                        <Autocomplete
                          disablePortal
                          id="plagasControladas"
                          options={PlagasControladasArray}
                          getOptionLabel={(option) =>
                            typeof option === "string" ||
                            option instanceof String
                              ? option
                              : ""
                          }
                          required
                          onChange={handlePlagas4Change}
                          sx={{ width: "100%" }}
                          renderInput={(params) => (
                            <TextField {...params} label="Plagas Controladas" />
                          )}
                        />
                      </Grid>
                    )}
                    {showInput2 > 3 && (
                      <Grid item xs={12} lg={6}>
                        <Autocomplete
                          disablePortal
                          id="plagasControladas"
                          options={PlagasControladasArray}
                          getOptionLabel={(option) =>
                            typeof option === "string" ||
                            option instanceof String
                              ? option
                              : ""
                          }
                          required
                          onChange={handlePlagas5Change}
                          sx={{ width: "100%" }}
                          renderInput={(params) => (
                            <TextField {...params} label="Plagas Controladas" />
                          )}
                        />
                      </Grid>
                    )}

                    <Grid item xs={12} lg={6}>
                      <Box sx={{ width: "100%" }}>
                        <Autocomplete
                          id="opcionesProducto"
                          options={opcionesProductos}
                          autoHighlight
                          fullWidth
                          getOptionLabel={(option) => option.label}
                          getOptionSelected={(option, value) =>
                            option.value === value.value
                          }
                          value={opcionesProductos.find(
                            (option) => option.value === productoSeleccionado
                          )}
                          renderInput={(params) => (
                            <TextField {...params} label="Productos" />
                          )}
                          renderOption={(props, option) => (
                            <li {...props}>
                              <span
                                style={{
                                  color: "black",
                                }}
                              >
                                {option.label}
                              </span>{" "}
                              -{" "}
                              <span
                                style={{
                                  color: "black",
                                }}
                              >
                                {option.value}
                              </span>
                            </li>
                          )}
                          onChange={handleProductoSeleccionadoChange}
                        />
                      </Box>
                    </Grid>
                    {showInput > 0 && (
                      <Grid item xs={12} lg={6}>
                        <Box sx={{ width: "100%" }}>
                          <Autocomplete
                            id="opcionesProducto"
                            options={opcionesProductos}
                            autoHighlight
                            fullWidth
                            getOptionLabel={(option) => option.label}
                            getOptionSelected={(option, value) =>
                              option.value === value.value
                            }
                            value={opcionesProductos.find(
                              (option) => option.value === producto2Seleccionado
                            )}
                            renderInput={(params) => (
                              <TextField {...params} label="Productos" />
                            )}
                            renderOption={(props, option) => (
                              <li {...props}>
                                <span
                                  style={{
                                    color: "black",
                                  }}
                                >
                                  {option.label}
                                </span>{" "}
                                -{" "}
                                <span
                                  style={{
                                    color: "black",
                                  }}
                                >
                                  {option.value}
                                </span>
                              </li>
                            )}
                            onChange={handleProducto2SeleccionadoChange}
                          />
                        </Box>
                      </Grid>
                    )}
                    {showInput > 1 && (
                      <Grid item xs={12} lg={6}>
                        <Box sx={{ width: "100%" }}>
                          <Autocomplete
                            id="opcionesProducto"
                            options={opcionesProductos}
                            autoHighlight
                            fullWidth
                            getOptionLabel={(option) => option.label}
                            getOptionSelected={(option, value) =>
                              option.value === value.value
                            }
                            value={opcionesProductos.find(
                              (option) => option.value === producto3Seleccionado
                            )}
                            renderInput={(params) => (
                              <TextField {...params} label="Productos" />
                            )}
                            renderOption={(props, option) => (
                              <li {...props}>
                                <span
                                  style={{
                                    color: "black",
                                  }}
                                >
                                  {option.label}
                                </span>{" "}
                                -{" "}
                                <span
                                  style={{
                                    color: "black",
                                  }}
                                >
                                  {option.value}
                                </span>
                              </li>
                            )}
                            onChange={handleProducto3SeleccionadoChange}
                          />
                        </Box>
                      </Grid>
                    )}
                    {showInput > 2 && (
                      <Grid item xs={12} lg={6}>
                        <Box sx={{ width: "100%" }}>
                          <Autocomplete
                            id="opcionesProducto"
                            options={opcionesProductos}
                            autoHighlight
                            fullWidth
                            getOptionLabel={(option) => option.label}
                            getOptionSelected={(option, value) =>
                              option.value === value.value
                            }
                            value={opcionesProductos.find(
                              (option) => option.value === producto4Seleccionado
                            )}
                            renderInput={(params) => (
                              <TextField {...params} label="Productos" />
                            )}
                            renderOption={(props, option) => (
                              <li {...props}>
                                <span
                                  style={{
                                    color: "black",
                                  }}
                                >
                                  {option.label}
                                </span>{" "}
                                -{" "}
                                <span
                                  style={{
                                    color: "black",
                                  }}
                                >
                                  {option.value}
                                </span>
                              </li>
                            )}
                            onChange={handleProducto4SeleccionadoChange}
                          />
                        </Box>
                      </Grid>
                    )}
                    {showInput > 3 && (
                      <Grid item xs={12} lg={6}>
                        <Box sx={{ width: "100%" }}>
                          <Autocomplete
                            id="opcionesProducto"
                            options={opcionesProductos}
                            autoHighlight
                            fullWidth
                            getOptionLabel={(option) => option.label}
                            getOptionSelected={(option, value) =>
                              option.value === value.value
                            }
                            value={opcionesProductos.find(
                              (option) => option.value === producto5Seleccionado
                            )}
                            renderInput={(params) => (
                              <TextField {...params} label="Productos" />
                            )}
                            renderOption={(props, option) => (
                              <li {...props}>
                                <span
                                  style={{
                                    color: "black",
                                  }}
                                >
                                  {option.label}
                                </span>{" "}
                                -{" "}
                                <span
                                  style={{
                                    color: "black",
                                  }}
                                >
                                  {option.value}
                                </span>
                              </li>
                            )}
                            onChange={handleProducto5SeleccionadoChange}
                          />
                        </Box>
                      </Grid>
                    )}
                    <Grid
                      item
                      xs={12}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <Button
                        onClick={() => {
                          setShowInput(showInput + 1);
                          console.log(showInput);
                        }}
                      >
                        Agregar Producto Utilizado
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <Button
                        onClick={() => {
                          setShowInput2(showInput2 + 1);
                        }}
                      >
                        Agregar Plaga Controlada
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              maxHeight={50}
            >
              <Stack spacing={2} direction="row">
                <ColorButton onClick={handlePdf} variant="contained">
                  <p
                    style={{
                      fontSize: "15px",
                      color: "white",
                    }}
                  >
                    AGREGAR
                  </p>
                </ColorButton>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              maxHeight={50}
            ></Grid>
          </Grid>

          {/* Agregar un enlace para descargar el PDF */}
        </form>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        {generatedPdf && (
          <a
            href={URL.createObjectURL(
              new Blob([generatedPdf], { type: "application/pdf" })
            )}
            download="Licencia Sanitaria.pdf"
          >
            Descargar PDF
          </a>
        )}
      </div>
    </>
  );
}
