
console.log("AKUMADAN RURAL BANK")
console.log("welcome")

console.log("Insert your card here ")

let security_code = 2022
let password_attempt = 1
let input_password = {}
let is_password_lock = false
let your_amount = 1000

while (security_code != input_password){
	if(password_attempt <= 3){
		console.log("Enter Your Code")
		input_password = window.prompt("Enter Your code")
	}else{
		is_password_lock = true
	}
	password_attempt = password_attempt + 1
	
	if (is_password_lock){
		console.log("Account is aborted due to axceed of limit")
		process.exit()
	}
	else if(security_code != input_password){
		console.log("Wrong code..... Please Try Again")
	}
	else if(security_code == input_password){
		console.log("Login Successful")
		break
	}
}
while (true){
	console.log("select Option")
	console.log("Press .1. for Account Information")
	console.log("Or")
	console.log("Press .2. for Withdrawals")
	let inquire_option = window.prompt("select Option")
	
	if (inquire_option == 1){
		console.log("current ballance: " + your_amount)
	}
	else if (inquire_option == 2){
		console.log("Select amount")
		console.log("1.  50 , 2.  100 , 3. 150 , 4. 300 , 5. 500 ")
	}
	let withdrawal_option = window.prompt("Enter Your Amount")
	
	if (withdrawal_option == 1){
		console.log("1. confirm Or 2. Abort")
		let confirm1 = window.prompt()
		
		if (confirm1 == 1){
			let currentCash = your_amount - 50
			console.log("Your Current ballance: " + currentCash)
			console.load("Thank You...")
			break
		}
		else if (withdrawal_option == 2){
			console.log("The process has been successfully aborted...")
			break
		}
		if (confirm1 == 2){
			let currentCash = your_amount - 1000
			console.log("Your Current ballance: " + currentCash)
			console.load("Thank You...")
			break
		}

	}
	else if (withdrawal_option == 2){
		console.log("1. confirm Or 2. Abort")
		let confirm1 = window.prompt()
		
		if (confirm1 == 1){
			let currentCash = your_amount - 100
			console.log("Your Current ballance: " + currentCash)
			console.load("Thank You...")
			break
		}
		else if (withdrawal_option == 2){
			console.log("The process has been successfully aborted...")
			break
		}
		if (confirm1 == 2){
			let currentCash = your_amount - 1000
			console.log("Your Current ballance: " + currentCash)
			console.load("Thank You...")
			break
		}

	}
	else if (withdrawal_option == 3){
		console.log("1. confirm Or 2. Abort")
		let confirm1 = window.prompt()
		
		if (confirm1 == 1){
			let currentCash = your_amount - 150
			console.log("Your Current ballance: " + currentCash)
			console.load("Thank You...")
			break
		}
		else if (withdrawal_option == 2){
			console.log("The process has been successfully aborted...")
			break
		}
		if (confirm1 == 2){
			let currentCash = your_amount - 1000
			console.log("Your Current ballance: " + currentCash)
			console.load("Thank You...")
			break
		}

	}
	else if (withdrawal_option == 4){
		console.log("1. confirm Or 2. Abort")
		let confirm1 = window.prompt()
		
		if (confirm1 == 1){
			let currentCash = your_amount - 300
			console.log("Your Current ballance: " + currentCash)
			console.load("Thank You...")
			break
		}
		else if (withdrawal_option == 2){
			console.log("The process has been successfully aborted...")
			break
		}
		if (confirm1 == 2){
			let currentCash = your_amount - 1000
			console.log("Your Current ballance: " + currentCash)
			console.load("Thank You...")
			break
		}

	}
	else if (withdrawal_option == 5){
		console.log("1. confirm Or 2. Abort")
		let confirm1 = window.prompt()
		
		if (confirm1 == 1){
			let currentCash = your_amount - 500
			console.log("Your Current ballance: " + currentCash)
			console.load("Thank You...")
			break
		}
		else if (withdrawal_option == 2){
			console.log("The process has been successfully aborted...")
			break
		}
		if (confirm1 == 2){
			let currentCash = your_amount - 1000
			console.log("Your Current ballance: " + currentCash)
			console.load("Thank You...")
			break
		}

	}
	else{
		console.log("Invalid Digit")
	}
}
