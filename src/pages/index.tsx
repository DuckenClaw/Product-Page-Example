import { Container, Typography, Stack, ThemeProvider, Button, Box, createTheme } from "@mui/material";
import react from 'react';
import next from 'next'
import Image from 'next/image'
import { Title } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    text: {
      primary: "#1B1B1B",
      secondary: "#5A5A5A",
      additional: "#969696",
    },
  }
})


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Stack
          sx={{
            maxWidth: "100%",
            py: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container>
            <Stack direction="row" justifyContent="space-between" >
              <Typography className="nav-address" sx={{fontSize: "14px", color: 'text.additional'}}> Home &#8594; Shoes &#8594; New Balance &#8594; New Balance 530 White Silver Navy </Typography>

              <Stack direction="row">
                <Image 
                  src="/assets/icon-share.png"
                  width={24}
                  height={24}
                  alt="share"
                />
                <Image 
                  src="/assets/icon-notification.png"
                  width={24}
                  height={24}
                  alt="notification"
                />
              </Stack>
            </Stack>
          </Container>


          {/*Product Image and Tags*/}
          <Stack direction="row" justifyContent={"space-between"}>
            <Container sx={{maxWidth: "556", maxHeight: "556"}}>
              <Stack direction="row"> 
                <Container> 
                  <Stack direction="row" spacing="16px">
                    <Stack direction="row">
                      <img src="/assets/icon-r2s.png" width="16px" height="16px"></img>
                      <Typography  sx={{fontSize: "12px"}}>Ready to Ship</Typography>
                    </Stack>
                    <Stack direction="row">
                      <img src="/assets/icon-pre-order.png" width="16px" height="16px"></img>
                      <Typography  sx={{fontSize: "12px"}}>Pre-order</Typography>
                    </Stack>
                  </Stack>
                  <Image width={556} height={417} src="/assets/new-balance-530-white-silver-navy-1.jpg" alt="New Balance 530 White Silver Navy"></Image>
                </Container>

                {/*Product Info*/}
                <Stack direction="column" justifyContent="space-between" sx={{maxWidth: "556", maxHeight: "556"}}> 
                  <Stack spacing="10px">
                    <Typography variant="h1" sx={{fontSize: "16px", color: 'text.primary'}}>New Balance 530 White Silver Navy</Typography>
                    <Typography variant="h3" sx={{fontSize: "12px", color: 'text.secondary'}}>New Balance | MR530SG </Typography>
                  </Stack>
                  {/*Product Prices*/}
                  <Stack direction="row" justifyContent="space-around" spacing="16px">
                    <Stack direction="column">
                      <Typography variant="h5" sx={{fontSize: "10px", color: 'text.additional'}}>Starting From</Typography>
                      <Typography variant="h3" sx={{fontSize: "16px", color: 'text.primary'}}>฿ 3,990</Typography>
                    </Stack>
                    <Stack direction="column">
                      <Typography variant="h4" sx={{fontSize: "10px", color: 'text.additional'}}>Highest Bid</Typography>
                      <Typography variant="h3" sx={{fontSize: "16px", color: 'text.primary'}}>฿ 4,100</Typography>
                    </Stack>
                    <Stack direction="column">
                      <Typography variant="h5" sx={{fontSize: "10px", color: 'text.additional'}}>Last Sale</Typography>
                      <Typography variant="h3" sx={{fontSize: "16px", color: 'text.primary'}}>฿ 4,050</Typography>
                    </Stack>
                  </Stack>
                  
                  <Stack direction="column" spacing="16px">
                    <Stack direction="row" spacing="16px" sx={{width: "100%", height: "auto"}}>
                      <Typography sx={{fontSize: "14px"}}>Shipping Method</Typography>
                      <img src="/assets/icon-info.png" width="16px" height="16px"></img>
                    </Stack>
                    <Stack direction="row" spacing="16px" sx={{width: "100%", height: "auto"}}>
                      <img src="/assets/icon-shipping-1.png" width="32px" height="32px"></img>
                      <Box>  
                        <Typography sx={{fontSize: "14px", color: 'text.primary'}}>Same Day Delivery</Typography>
                        <Typography sx={{fontSize: "12px", color: 'text.secondary'}}>Messenger delivery on scheduled date & time (fee based on distance)</Typography>
                      </Box>
                    </Stack >
                    <Stack direction="row" spacing="16px" sx={{width: "100%", height: "auto"}}>
                      <img src="/assets/icon-shipping-2.png" width="32px" height="32px"></img>
                      <Box>
                        <Typography sx={{fontSize: "14px", color: 'text.primary'}}>Standard Delivery</Typography>
                        <Typography sx={{fontSize: "12px", color: 'text.secondary'}}>Ship via provided delivery service after authentication (3-5 days)</Typography>
                      </Box>  
                    </Stack>
                  </Stack>

                  {/*Product Guarantees*/}
                  <Stack direction="row" spacing="10px" justifyContent="center" alignItems="center">
                    <Stack direction="row" spacing="6px" alignItems="center" sx={{ width: "100%", height: "auto" }}>
                      <img src="/assets/icon-authen.png" alt="auth" width="24px" height="24px"></img>
                      <Typography sx={{fontSize: "12px", color: 'text.secondary'}}>100% Authentic Guarantee</Typography>
                    </Stack>
                    <Stack direction="row" spacing="6px" alignItems="center"  sx={{ width: "100%", height: "auto" }}>
                      <img src="/assets/icon-anti-fraud.png" alt="anti-fraud" width="24px" height="24px"></img>
                      <Typography sx={{fontSize: "12px", color: 'text.secondary'}}>Anti Fraudulent transaction</Typography>
                    </Stack>
                  </Stack>

                  <Container>
                    <Stack direction="row" justifyContent="space-even" spacing="16px">
                      <Button variant="contained" fullWidth={true} sx={{backgroundColor: "#1B1B1B!important", color: "#FFFFF"}}> Sell </Button>
                      <Button variant="contained" fullWidth={true} sx={{backgroundColor: "#00B900!important", color: "#FFFFF"}}> Buy </Button>
                    </Stack>
                  </Container>
                </Stack>
              </Stack>  
            </Container>
          </Stack>

          <Typography variant="h4" component="h1">
            Sasom Co., Ltd. 🚀
          </Typography>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
