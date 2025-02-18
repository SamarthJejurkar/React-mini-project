import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";  
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
  const HAZY_WEATHER_URL = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0";
  const HOT_URL = "https://images.unsplash.com/photo-1586793064296-2658fa260cbe?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL="https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL = "https://plus.unsplash.com/premium_photo-1666726664307-707a74015ca4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
                info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/>: <AcUnitIcon/>
              }
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Temperature Min: {info.tempMin}&deg;C</p>
              <p>Temperature Max: {info.tempMax}&deg;C</p>
              <p>Feels like: {info.feelslike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
