let store = {drivers: [], passengers: [], trips:[]}
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
	constructor(name) {
		this.id = ++driverId;
		this.name = name

		store.drivers.push(this)
	}

	setDriver(driver){
		this.driverId = driver.id
	}

	trips(){
		return store.trips.filter(
			function(trip) {
				return trip.driverId === this.id
			}.bind(this)
		)
	}

	passengers(){
		return this.trips().map(
			 function(trip) {
				return trip.passenger()
			}
		)
	}

}

class Passenger {
	constructor(name) {
		this.id = ++passengerId;
		this.name = name;

		store.passengers.push(this)
	}

	setPassenger(passenger){
		this.passengerId = passenger.id
	}

	trips(){
		return store.trips.filter(
			function(trip){
				return trip.passengerId = this.id
			}.bind(this)
		)
	}

	drivers(){
		return this.trips().map(
			function(trip){
				return trip.driver()
			})
	}
}

class Trip {
	constructor(driver, passenger) {
		this.id = ++tripId
		this.driverId = driver.id
		this.passengerId = passenger.id
		store.trips.push(this)
	}

	setTrip(trip){
		this.tripId = trip.id
	}

	driver() {
		return store.drivers.find(
			function(driver){
				return driver.id == this.driverId
			}.bind(this)
		)
	}

	passenger() {
		return store.passengers.find(
			function(passenger){
				return passenger.id == this.passengerId
			}.bind(this)
		)
	}

	
}
