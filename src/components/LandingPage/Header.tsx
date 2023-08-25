import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";

export function Header (){
    return <AppBar
    position="static"
    color="default"
    elevation={0}
    sx={{ borderBottom: `1px solid  #333` }}
  >

   <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Typography variant="h6" color="text" noWrap sx={{ flexGrow: 1 }}>
        WB Advocacia
      </Typography>
      <nav>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
        >
          Espaço
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
        >
          Contato
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
        >
          Novidades
        </Link>
      </nav>
      <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
        Login
      </Button>
    </Toolbar>

    </AppBar>
}