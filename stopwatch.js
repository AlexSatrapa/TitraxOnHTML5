function StopWatch() {
	var startTime = null;
	var stopTime = null;
	var running = false;

	function getTime() {
		var day = new Date();
		return day.getTime();
		}

	this.start = function() {
		if (running == true)
			return;
		else if (startTime != null)
			stopTime = null;

		running = true;
		startTime = getTime();
		}

	this.stop = function() {
		if (running == false)
			return;

		stopTime = getTime();
		running = false;
		}

	this.duration = function() {
		if (startTime == null)
			return 'Not Running';
		else if (stopTime == null)
			current = getTime();
			return (current - startTime) / 1000;
		else
			return (stopTime - startTime) / 1000;
		}
	}
