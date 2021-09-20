import { makeStyles, Paper, Typography } from '@material-ui/core'
import smart from "../images/banner_viajes.png"


const Banner = () => {
    const classes = useStyles()
    return (
        <>
            <Paper variant="outlined" square elevation={0} className={ classes.banner }>
                <div className={classes.titleContainer}>
                    <Typography variant="h4" className={ classes.title}>
                        <span style={{color:"black"}}>Reset your Events in</span> <span style={{color: "#ea5933"}}>BCN</span>
                        </Typography>
                    </div>
            </Paper>
        </>
    )
}

export default Banner


const useStyles = makeStyles((theme) => ({
    banner: {
       width: "inherit",
       height: "55vh",
       backgroundImage: `url(${smart})`,
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover",
       backgroundPosition: "center center",
       color: "#fff",
       fontWeight: "bold",
       position: "relative",
    }
}))
