import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import mainLogo from '../../assets/mainLogo.png'

export function Header (){


    return <AppBar
    position="static"
    color="default"
    elevation={0}
    sx={{ borderBottom: `1px solid  #333` }}
  >

   <Toolbar sx={{ flexWrap: 'wrap' }}>
    
      <Typography variant="h6" color="text" noWrap sx={{ flexGrow: 1 }}>
      <img alt="mainLogo" src={mainLogo} style={{maxWidth:'80px'}} />
      </Typography>
      <nav>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
        >
          Localização
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
       {/* <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
        Login
      </Button>
     */}
    </Toolbar>

    </AppBar>
}