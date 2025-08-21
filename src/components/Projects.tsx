

export function Projects() {

    return (
        <div className="projects-container">
            <div className="txt-1">
                Browse My Recent
            </div>

            <div className="txt-2">
                Projects
            </div>

            <div className="all-projects">
                <div className="project">
                    <div style={{width: '100%'}} className="project-image">
                        <img style={{width: '100%'}} src="/img/Obi.png" alt="" />
                    </div>

                    <div className="project-name">
                        Obi
                    </div>

                    <div className="project-btns">
                        <div className="g-h">
                            <a href="https://github.com/Dev-KoSi/Obi" target="blank"><button>GitHub</button></a>
                        </div>

                        <div className="l-d">
                            <a href="https://Obi-rose.vercel.app" target="blank"><button>Live Demo</button></a>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div style={{width: '100%'}} className="project-image">
                        <img style={{width: '100%'}} src="/img/Boole.png" alt="" />
                    </div>

                    <div className="project-name">
                        Boole
                    </div>

                    <div className="project-btns">
                        <div className="g-h">
                            <a href="https://github.com/Dev-KoSi/Boole" target="blank"><button>GitHub</button></a>
                        </div>

                        <div className="l-d">
                            <a href="https://dev-kosi.github.io/Boole/" target="blank"><button>Live Demo</button></a>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div style={{width: '100%'}} className="project-image">
                        <img style={{width: '100%'}} src="/img/Friendi.png" alt="" />
                    </div>

                    <div className="project-name">
                        Friendi
                    </div>

                    <div className="project-btns">
                        <div className="g-h">
                            <a href="https://github.com/Dev-KoSi/Friendi" target="blank"><button>GitHub</button></a>
                        </div>

                        <div className="l-d">
                            <a href="https://Friendi.vercel.app" target="blank"><button>Live Demo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}