const form = document.getElementById('container-todolist');
const container_texto = document.getElementById('container-texto');

form.onsubmit = function (e) {
	e.preventDefault();
	const ipt_add_checkbox = document.getElementById('ipt-add-checkbox').value;
	AddCheckbox(ipt_add_checkbox);
	form.reset();
};

function AddCheckbox(descricao) {
    
	const Container = document.createElement('div');
	const input_check = document.createElement('input');
	const label = document.createElement('label');
	const descricao_check = document.createTextNode(descricao);

	input_check.setAttribute('type', 'checkbox');
	input_check.setAttribute('name', descricao);
	input_check.setAttribute('id', descricao);

	label.setAttribute('for', descricao);
	label.appendChild(descricao_check);
	Container.classList.add('container-item');

	Container.appendChild(input_check);
	Container.appendChild(label);
	container_texto.appendChild(Container);
    console.log(input_check);
}