import { Button, Tab, Tabs } from "react-bootstrap";

export default function Booststrap() {
  return (
    <div>
      <h3>Bootstrap Components</h3>
      <Button>Button</Button>
      <Button variant="success">Button</Button>

      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <div>home</div>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <div>profile</div>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <div>contact</div>
        </Tab>
      </Tabs>
    </div>
  );
}
