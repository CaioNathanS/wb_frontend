import { Box, Typography } from "@mui/material";
import { Button, Stack } from "@mui/material";
import pretoLogo from "../../assets/pretoLogo.png";

export function Header() {
  return (
    <Box pb={4}>
      {" "}
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        <img
          alt="img"
          src={pretoLogo}
          style={{
            maxWidth: "350px",
            marginBottom: "-110px",
            marginTop: "-40px",
          }}
        />
      </Typography>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <Button variant="contained">Conhcer espaço</Button>
      </Stack>
    </Box>
  );
}
