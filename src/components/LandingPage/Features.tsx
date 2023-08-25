import { Button, Card, CardActions, CardContent,  Container, Grid, Typography } from "@mui/material";



export function Features(){
    return  <Container sx={{ py: 1 }}>
    {/* End hero unit */}
    <Grid container spacing={4}>
     
        

        <Grid item  xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
           
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Contato
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item  xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
           
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Horário de funcionamento
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item  xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
           
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Espaço
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item  xs={12} sm={12} md={12}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
           
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Localização
              </Typography>
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