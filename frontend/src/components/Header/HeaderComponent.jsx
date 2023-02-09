import React from "react";
import './HeaderComponent.css'
import {Link} from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import {MdOutlineLogout} from 'react-icons/md'

const HeaderComponent = (props) => {
    console.log(props)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
                    <img className="w-25 m-4" src="/logo_biosbike.png"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item m-3">
                        <Link to={"/"} className="nav-link">
                            <p className="h2 text-primary">Home</p>
                        </Link>
                    </li>
                    <li className="nav-item m-3">
                        <Link to={"/stations"} className="nav-link">
                            <strong className="h2 text-primary">Stations</strong>
                        </Link>
                    </li>
                    <li className="nav-item m-3">
                        <Link to={"/about"} className="nav-link">
                            <strong className="h2 text-primary">About</strong>
                        </Link>
                    </li>
                    <li className="nav-item m-3">
                        <Link to={"/dashboard"} className="nav-link">
                            <strong className="h2 text-primary">Admin</strong>
                        </Link>
                    </li>
                </ul>
            </div>
            {
               props.isToken ?
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-brand bg-primary infor">
                            <Link to={"/profile"}>
                                <img className="w-50 btn btn-link" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20480%20480%22%20fill%3D%22none%22%20shape-rendering%3D%22auto%22%3E%3Cdesc%3E%22Custom%20Avatar%22%20by%20%22Ashley%20Seo%22%2C%20licensed%20under%20%22CC%20BY%204.0%22.%20%2F%20Remix%20of%20the%20original.%20-%20Created%20with%20dicebear.com%3C%2Fdesc%3E%3Cmetadata%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%3E%3Cdc%3Atitle%3ECustom%20Avatar%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3E%3Ccc%3AAgent%20rdf%3Aabout%3D%22http%3A%2F%2Fwww.ashleyseo.com%2F%22%3E%3Cdc%3Atitle%3EAshley%20Seo%3C%2Fdc%3Atitle%3E%3C%2Fcc%3AAgent%3E%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%3Ehttps%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F881358461963645496%3C%2Fdc%3Asource%3E%3Ccc%3Alicense%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F%22%20%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22viewboxMask%22%3E%3Crect%20width%3D%22480%22%20height%3D%22480%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%20%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23viewboxMask)%22%3E%3Cg%20transform%3D%22matrix(.85775%200%200%20.85427%2052%2047)%22%3E%3Cpath%20d%3D%22M264%2038.6s131.4%2020.6%20121.4%20208.1c0%20.7%2015.2%2010.9%2016.4%2012a77.1%2077.1%200%200%201%2023.4%2036.3c13.9%2051.3-35.7%20104.2-75.8%20118.2a155%20155%200%200%201-46.7%208.3c-103.1%203-239.7-62.7-246.7-191a202.7%20202.7%200%200%201%2015.1-83.9c0%20.1%2057.4-142.5%20192.9-108Z%22%20fill%3D%22%23c99c62%22%2F%3E%3Cpath%20d%3D%22M388.7%20248.7a57%2057%200%200%200-3.2%2010.5%2040%2040%200%200%200%208.5%2030.4%2042.3%2042.3%200%200%200%2033%2015.7c-3.2-31.7-29-50.7-38.3-56.6ZM203.5%20332c24.4-5.2%2039.6-31%2033.9-57.5-5.7-26.5-30.2-43.7-54.6-38.5-24.4%205.3-39.5%2031-33.8%2057.6%205.7%2026.5%2030.1%2043.7%2054.5%2038.5Z%22%20fill%3D%22%23DC2400%22%20style%3D%22mix-blend-mode%3Amultiply%22%20opacity%3D%22.1%22%2F%3E%3Cpath%20opacity%3D%22.1%22%20d%3D%22M323%20257.9s20.9-19.9%2037-1.2Z%22%20fill%3D%22%23000%22%2F%3E%3Cpath%20d%3D%22M128.7%20356.9C59.3%20391.7-3.7%20304.4%2016.5%20255.3c12.9-31.4%2050.4-33.8%2072.1-5.2a185%20185%200%200%201%2029.1%2059.1%22%20fill%3D%22%23c99c62%22%2F%3E%3Cpath%20opacity%3D%22.1%22%20d%3D%22M71.5%20279c9%209%2016.1%2022.5%2025%2030-1.7-12.5-4.3-26-10.4-37.3-6.2-11.6-17.5-21-29-20.3-14.2%201-25.9%2017.6-27.4%2032.6%201-9%2019-15%2025.9-14.2%2010.8%2020.4%2015%2060.6%2015%2060.6%209-22.7%205.4-40.7%201-51.5Z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.85472%200%200%20.855%2019%20-17)%22%3E%3Cpath%20d%3D%22M311.4%20362.3C339%20346%20362.6%20345%20379.3%20344c33.3-2%2061.1%208.8%2068.5%2042.7%206.8%2031.2-16.9%2049.4-27.8%2049-11-.3-13.3-12.2-39.3-12.8-26-.6-63.4%2042.9-85.5%2026.6-22.2-16.4-18.4-66.6%2016.2-87Z%22%20fill%3D%22%23873C41%22%2F%3E%3Cmask%20id%3D%22mouthOpenSad-a%22%20style%3D%22mask-type%3Aalpha%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%22281%22%20y%3D%22343%22%20width%3D%22169%22%20height%3D%22110%22%3E%3Cpath%20d%3D%22M311.4%20362.3c27.7-16.4%2051.3-17.4%2068-18.4%2033.4-2%2061.2%208.8%2068.6%2042.6%206.8%2031.1-16.9%2049.3-27.8%2049-11-.3-13.3-12.3-39.4-12.9-26-.6-63.4%2042.9-85.6%2026.6-22.2-16.3-18.4-66.5%2016.2-87Z%22%20fill%3D%22%23873C41%22%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23mouthOpenSad-a)%22%3E%3Cpath%20d%3D%22M430.6%20428.3c-26.2-16.8-55.9-23.5-85.4-26.8-25.3-2.9-53.1-2.7-76.2%208.5%2015.5%2022.2%2011.9%2047.5%2036.5%2052%2038%207%20102-7.5%20131.2-29.4-2-1.4-4-3-6.1-4.3Z%22%20fill%3D%22%23EE7E8B%22%2F%3E%3Cpath%20d%3D%22M299.1%20377a46.8%2046.8%200%200%200%2034.3-8.5c2-1.2%204.2-.1%205.5%201.6%2013.2%2018.4%2047.2%2017.5%2057-1.4.8-1.5%202.8-2.6%204.4-1.9a29%2029%200%200%200%2032.3-7.3c10.5-12.5%202.5-33-6.8-46-10.4%208.3-17%2027.7-19.8%2027.3%200%200-95.4-14.5-130.2%2017.7a32.4%2032.4%200%200%200%2023.3%2018.4Z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.85472%200%200%20.855%2019%20-17)%22%3E%3Cpath%20d%3D%22M300.3%20309.2c8.9-.2%2017.7%203%2025.5%207.7a24%2024%200%200%200%205.2-21.5c-2.4-12-11.8-20-20.9-18-9%202-14.4%2013.5-11.9%2025.5.5%202.3%201.2%204.3%202.1%206.3ZM416.1%20310.6c1.3-2.9%202-6.4%202-10.2-.2-9.5-5.3-17.2-11.4-17.2-6.1%200-11%207.8-10.8%2017.4.1%205.2%201.8%209.9%204.2%2013%205-2%2010.5-3%2016-3Z%22%20fill%3D%22%232A1200%22%2F%3E%3Cpath%20d%3D%22M333.5%20238.7a43.9%2043.9%200%200%200-38.2%2013.2c-3.2%203.4-4%209.3-.7%2013%203%203.6%208.6%204.6%2012%201l3.2-3c.4-.3%201.3-.8%201.6-1.2l.5-.4a37.7%2037.7%200%200%201%206-3c.5%200%201.2-.4%201.7-.5a35.6%2035.6%200%200%201%206.3-1.2h2l4.3.5c4.4.7%209-3.6%209.2-8.4.1-5.3-3.2-9.3-8-10ZM425.4%20254.4a31.4%2031.4%200%200%200-20.2-12.6c-2.1-.4-4.6.4-6.3%201.8a9.5%209.5%200%200%200-3.1%206.2c-.1%202.4.3%205%201.8%206.8a9%209%200%200%200%205.7%203.5l1.2.3c1%20.4%202.1.8%203.2%201.4%201.2.8%202.3%201.7%203.3%202.7l1%201.3a8.8%208.8%200%200%200%205.8%203.5c2%20.2%204.6-.4%206.2-2%201.7-1.5%203-3.6%203.2-6%20.1-2.5-.4-5-1.8-7Z%22%20fill%3D%22%2371472D%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.85472%200%200%20.85667%2018%20-15)%22%3E%3Cpath%20d%3D%22M440%20102.8c-74-50.6-244.4-113.6-334%2040l28.2%2032c-17%2022.4-25.2%2041.9-25.7%2043.2-8.8%2022-12%2046.3-12.6%2070.6-.1%204.6%200%209.2.2%2013.8%2038.1%206.5%2056.1%2047.3%2060.4%2067%200%200%2011.3.6%2014-1.6%2014-7.3%2038.9-37.4%2026.5-99-6-28-2-50.3%2047-85%2020.6-14.5%2046.3-19.2%2070.3-18.7a1221.6%201221.6%200%200%200%2010%20.5c29.2%202.3%2054.4%2011.5%2062.7%2018.2%2012.8%2010.4%2019%2014.4%2020.4%2015-5.6-12.6-12-23.5-19-32.8%207.8-19%2021.9-44.5%2040.7-57.4%203.5-2.4%207.1-4.4%2010.9-5.8Z%22%20fill%3D%22%2371472d%22%2F%3E%3Cpath%20d%3D%22M106%20142.8c89.6-153.6%20260-90.6%20334-40-20-13.7-115.5-40.5-159-18.5l.4.7c-83-18-151.1%2030.5-175.4%2057.8Z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.2%22%2F%3E%3Cpath%20d%3D%22M440%20102.8c-30.4%2011.2-51%2058-57%2078-28.5-14-47-15-77-16%204-32.8-17.7-67.8-25-80.5%2043.5-22%20139%204.8%20159%2018.5Z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20d%3D%22M306.2%20163.2c-.8-12-40.7-41.1-81.2-36.4-54.1%206.4-86.5%2045-89%2050l-1.8-2c-17%2022.4-25.2%2041.9-25.7%2043.2-8.8%2022-12%2046.3-12.6%2070.6-.1%204.6%200%209.2.2%2013.8%2038.1%206.5%2056.1%2047.3%2060.4%2067%200%200%2011.3.6%2014-1.6%2014-7.3%2038.9-37.4%2026.5-99-6-28-2-50.3%2047-85%2020.6-14.5%2046.3-19.2%2070.3-18.7l-8.3-.3.2-1.6ZM324.3%20165.6c29.2%202.3%2054.4%2011.5%2062.7%2018.2%2012.8%2010.4%2019%2014.4%2020.4%2015-5.6-12.6-12-23.5-19-32.8-2.4%205.6-4.2%2010.7-5.4%2014.7v.1a138.1%20138.1%200%200%200-58.7-15.2Z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.7%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.85472%200%200%20.85667%2014%20-12)%22%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                            </Link>
                            <button className="navbar-brand btn btn-link">
                                <MdOutlineLogout onClick={() => props.isLogout()} style={{ fontSize: "40px" }} />
                            </button>
                        </li>
                    </ul>
                :
                <button className="navbar-brand btn btn-link">
                    <FaUserCircle onClick={() => props.isLogin()}  style={{fontSize: "90px"}}/>
                </button>
            }            
        </nav>
    )
};

export default HeaderComponent