import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./school.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">SMKN 5 JEMBER</div>
							<div className="work-subtitle">SMKN 5 JEMBER</div>
							<div className="work-duration">2019 - 2021</div>
						</div>

						<div className="work">
							<img
								src="./school.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">
								Teknologi Informatika - Manajemen Informatika
							</div>
							<div className="work-subtitle">
								Politeknik Negeri Jember
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
