import Header from "../Header";
import Language from "../Language";
import Form from "../Form";

const Settings = ({ display }) => (

        <div className={ display ? "" : "d-none" }>
            <Language />
            <Header />
            <Form />
        </div>
);


export default Settings;