import "./Gauges.scss";

function Guages() {
	return (
		<>
			<section className="gauges">
				<div class="guage three">
					<div class="guage-inner">95%</div>
				</div>
				<div class="guage two">
					<div class="guage-inner">42%</div>
				</div>
			</section>
			<div className="tag">
				<p>
					Renewable energy <br></br>sourced
				</p>
				<p>
					Cross-operational <br></br>carbon neutrality
				</p>
			</div>
			<section className="gauges1">
				<div class="guage one">
					<div class="guage-inner">22%</div>
				</div>
				<div class="guage four">
					<div class="guage-inner">74%</div>
				</div>
			</section>
			<div className="tag">
				<div>
					<p>
						Decrease in absolute <br></br>energy use
					</p>
				</div>
				<div>
					<p>
						Waste diverted from <br></br>landfill
					</p>
				</div>
			</div>
		</>
	);
}

export default Guages;
