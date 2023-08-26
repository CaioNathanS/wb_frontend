import { Box, Button, Card,  CardContent,  Container, Grid, Typography } from "@mui/material";
import {LocalPhone} from '@mui/icons-material';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import RestaurantIcon from '@mui/icons-material/Restaurant';




export function Features(){
    return  <Container sx={{ py: 1 }}>
    {/* End hero unit */}
    <Grid container spacing={4}>
     
        

        <Grid item  xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column',  boxShadow:" 3px 3px 6px 7px #ccc" }}
          >
           
            <CardContent sx={{ flexGrow: 1  }}>
              <Typography gutterBottom variant="h5" component="h2">
                Contato
              </Typography>

              <Box sx={{display:"flex" , alignItems:"center"}}>
              <Typography sx={{width:'90%'}}>
              wbraz.adv@gmail.com 
              </Typography>
              <Button size="small">
              <MailOutlineIcon />
              </Button>
                </Box>
             
                <Box sx={{display:"flex" , alignItems:"center"}}>
                <Typography sx={{width:'90%'}}>
              (61) 3543-9342
              </Typography>
              <Button   size="small">
              <LocalPhone />
              </Button>
              </Box>

              <Box sx={{display:"flex", alignItems:"center"}}>
              <Typography sx={{width:'90%'}}>
              (61) 99410-0485 
              </Typography>
              <Button  size="small">
              <SmartphoneIcon />
             
                </Button>
              </Box>
            </CardContent>
           
          </Card>
        </Grid>

        <Grid item  xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow:" 3px 3px 6px 7px #ccc" }}
          > 
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Horário de funcionamento
              </Typography>
              <Box sx={{display:"flex" , alignItems:"center"}}>
              <Typography sx={{width:'90%'}}>
              Segunda a sexta
              </Typography>
              <Button size="small">
              <CalendarMonthIcon />
              </Button>
                </Box>

                <Box sx={{display:"flex" , alignItems:"center"}}>
              <Typography sx={{width:'90%'}}>
              8h - 18h
              </Typography>
              <Button size="small">
              <ScheduleIcon />
              </Button>
              </Box>

               <Box sx={{display:"flex" , alignItems:"center"}}>
              <Typography sx={{width:'90%'}}>
              12h - 14h
              </Typography>
              <Button size="small">
              <RestaurantIcon />
              </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item  xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow:" 3px 3px 6px 7px #ccc" }}
          >
           
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                 Localização
              </Typography>
              <Typography py={1}>
              Grande Colorado,  Edifício Pontal 
              </Typography>
              <Typography pb={1}>
              Condominio Solar de Athenas,  Lotes 01/02
              </Typography>
              <Typography pb={1}>
              73015-903 
                </Typography>
            </CardContent>
           
          </Card>
        </Grid>

        <Grid item  xs={12} sm={12} md={12}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
           
            <CardContent sx={{ flexGrow: 1 }}>
              
              <iframe 
               title="local"
               width="100%"
               height="330px"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.5090992127484!2d-47.8457059855573!3d-15.671108124108574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a392115c29073%3A0xabdf6f4af0ef3932!2sWENDERSON%20BRAZ%20SOCIEDADE%20INDIVIDUAL%20DE%20ADVOCACIA!5e0!3m2!1spt-BR!2sbr!4v1595276576999!5m2!1spt-BR!2sbr" />
              
            </CardContent>
           
          </Card>
        </Grid>
    </Grid>
  </Container>
   
}