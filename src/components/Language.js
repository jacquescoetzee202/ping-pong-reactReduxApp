import Dropdown from 'react-bootstrap/Dropdown';

const Language = ({ text, lang1Select, lang2Select }) => (
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            { text }
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item onClick={ lang1Select }>English</Dropdown.Item>
            <Dropdown.Item onClick={ lang2Select }>Esperanto</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

export default Language;