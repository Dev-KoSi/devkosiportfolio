import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


export function Header() {
    const [borderBottom, setBorderBottom] = useState<string>('about');

    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/') {
            setBorderBottom('about');
        } else if(location.pathname === '/experience') {
            setBorderBottom('experience');
        } else if(location.pathname === '/projects') {
            setBorderBottom('projects');
        } else if(location.pathname === '/contact') {
            setBorderBottom('contact');
        }
    }, [location]);

    return (
        <div className="header">
            <div className="my-name">
                Dev KoSi
            </div>

            <div className="links">
                <Link className='Link' to={'/'}><div  className={`about link abt-${borderBottom}`}>
                    <div>About</div>
                </div></Link>

                <Link className='Link' to={'/experience'}><div  className={`experience link exp-${borderBottom}`}>
                    <div>Experience</div>
                </div></Link>

                <Link className='Link' to={'/projects'}><div  className={`projects link pro-${borderBottom}`}>
                    <div>Projects</div>
                </div></Link>

                <Link className='Link' to={'/contact'}><div  className={`contact link con-${borderBottom}`}>
                    <div>Contact</div>
                </div></Link>
            </div>
        </div>
    )
}