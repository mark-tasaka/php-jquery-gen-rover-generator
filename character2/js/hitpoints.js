    /*
getHitsPoints (rover, add1, add2) - retreives the number of hit points that the rover will have based on their level (rover), stamina modifier (add1) and Lucky Sign (add2).  Luck Modifer applies if Bountiful Harvest luck sign is present.
*/
function hitPoints (rover, add1, add2) {
	let hd = rover.hd;
	let level = rover.level;
	let hitPoints = 0;
	let zeroLevelHitPoints = Math.floor((Math.random() * 4) + 1) + add1 + add2;
	let hitPointsEachLevel = Math.floor((Math.random() * 6) + 1) + add1 + add2;
	
	if (level === 1) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel;
		if (hitPoints <= 3) {
			hitPoints = 4;
		}
	}	
	else if (level === 2) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 5) {
			hitPoints = 6;
		}
	}
	else if (level === 3) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 8) {
			hitPoints = 9;
		}
	}
	else if (level === 4) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 10) {
			hitPoints = 11;
		}
	}
	else if (level === 5) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel;
		if (hitPoints <= 12) {
			hitPoints = 13;
		}
	}
	else if (level === 6) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 14) {
			hitPoints = 15;
		}
	}
	else if (level === 7) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 16) {
			hitPoints = 17;
		}
	}
	else if (level === 8) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 18) {
			hitPoints = 19;
		}
	}
	else if (level === 9) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 20) {
			hitPoints = 21;
		}
	}
	else if (level === 10) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 22) {
			hitPoints = 23;
		}
	}
	return hitPoints;
}	  
