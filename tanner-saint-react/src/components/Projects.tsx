import Project from "./Project";

import GNN from "../assets/gnn.png";
import Crossfire from "../assets/surplus_yards.png";
import VaultTec from "../assets/vault_tec.png";

function Projects() {
    return (
        <div className="flex flex-col gap-4 mx-4 pt-8">
            <h2 className="text-2xl text-center text-cyan">My Projects</h2>

            <div className="flex flex-col gap-16 mb-16">
                <Project
                    imgSrc={GNN}
                    title="Galaxy News Network"
                    description="Nisi sunt quis fugiat aliqua. Ex eiusmod nisi Lorem aute est ea aute aute. Sint eiusmod enim ex fugiat dolor pariatur enim eu cillum. Deserunt ex commodo incididunt commodo excepteur. Sint laborum do nisi elit elit aliqua do. Cillum dolore in voluptate voluptate elit dolore enim sint deserunt laboris."
                    siteLink="https://trippyvaultboy.github.io/galaxy-news-radio/"
                    githubLink="https://github.com/TrippyVaultBoy/galaxy-news-radio"
                    technologies={["HTML", "CSS", "Javascript", "Bootstrap"]}
                />
                <Project
                    imgSrc={Crossfire}
                    title="Crossfire Surplus Yards"
                    description="Nisi sunt quis fugiat aliqua. Ex eiusmod nisi Lorem aute est ea aute aute. Sint eiusmod enim ex fugiat dolor pariatur enim eu cillum. Deserunt ex commodo incididunt commodo excepteur. Sint laborum do nisi elit elit aliqua do. Cillum dolore in voluptate voluptate elit dolore enim sint deserunt laboris."
                    siteLink="https://trippyvaultboy.github.io/atlas-bootstrap/"
                    githubLink="https://github.com/TrippyVaultBoy/atlas-bootstrap"
                    technologies={["HTML", "CSS", "Bootstrap", "Responsive Design"]}
                />
                <Project
                    imgSrc={VaultTec}
                    title="Vault Tec Industries"
                    description="Nisi sunt quis fugiat aliqua. Ex eiusmod nisi Lorem aute est ea aute aute. Sint eiusmod enim ex fugiat dolor pariatur enim eu cillum. Deserunt ex commodo incididunt commodo excepteur. Sint laborum do nisi elit elit aliqua do. Cillum dolore in voluptate voluptate elit dolore enim sint deserunt laboris."
                    siteLink="https://trippyvaultboy.github.io/vault_tec_website/"
                    githubLink="https://github.com/TrippyVaultBoy/vault_tec_website/"
                    technologies={["HTML", "CSS", "Javascript", "Leaflet.js"]}
                />
            </div>
        </div>
    )
}

export default Projects;