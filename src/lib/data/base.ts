const firstName = 'Emilio';
const lastName = 'Guarino';
const suffix = 'Portfolio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
