import Header from "../Header";
import Language from "../Language";
import Form from "../Form";

const Settings = ({ inProgress }) => (
    
    inProgress ? null :
    <>
        <Language />
        <Header />
        <Form />
    </>
);


export default Settings;