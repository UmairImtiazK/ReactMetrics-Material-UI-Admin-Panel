import './Featured.css';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
export default function Featured() {
  return (
    <div className='FeaturedCont | text-accent-100'>
      <header>
        <h2 className='heading fs-700'>Total Revenue</h2>
        <MoreVertIcon/>
      </header>
      <main>
        <div className="FeaturedProgress">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <div className="transictions">
            <div className="topCont">
            <h2 className='fs-600'>Total sales made today</h2>
            <h1 className='fs-900 text-primary-100'>$420</h1>
            <p className='fs-300'>
            Previous transactions processing. Last payments may not be included.
            </p>
            </div>
            <div className="bottum">
                <div className="cont">
                    <h3>Target</h3>
                    <div className="revenue | text-regular-300">
                    <KeyboardArrowDownIcon className="FeaturedIcon"/>
                    <p>$12.4k</p>
                    </div>
                </div>
                <div className="cont">
                    <h3>Last Week</h3>
                    <div className="revenue | text-regular-300">
                    <KeyboardArrowUpOutlinedIcon className="FeaturedIcon"/>
                    <p>$12.4k</p>
                    </div>
                </div>
                <div className="cont">
                    <h3>Last Month</h3>
                    <div className="revenue | text-regular-300">
                    <KeyboardArrowUpOutlinedIcon className="FeaturedIcon"/>
                    <p>$12.4k</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}
