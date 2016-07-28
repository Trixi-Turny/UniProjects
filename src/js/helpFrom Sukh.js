function validate(identifier, value, blah) {

	// ES5 code
	var identifier = identifier || 'default'

	if (isEmpty()) {
		showError('message');
		return false;
	}

	switch(identifier) {
		case 'tele': 
			validateTele(value, blah)
			break;
		case 'email': break;
		


	}

	// everything is sweet
	return true;

}

function submit() {

	status = boolean
	getFields

	looopFields {

		if ! validate(passField) {

			set status to false
		}

	} 

	check status 
	if status is true {
		show the other message
	}
}

validate();
validate('name', 'trixi');
 if (false === validate('tele', '0123', '+44')) {

 }
