export function ExperienceBar() {
	return(
		<header className="ExperienceBar" >
			<span>0xp</span>
			<div>
				<div style={{width: '50%'}} />

				<span 
					className='ExperienceBar__total-xp'
					style={{left: '50%'}} 
				>
					300xp
				</span>
			</div>
			<span>600xp</span>
		</header>
	)
}