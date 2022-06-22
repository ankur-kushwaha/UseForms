import { Form } from "./components/Form";
import "./styles.css";
import { defaultTheme, Provider } from "@adobe/react-spectrum";
import { Form1, Form2 } from "./components/forms";
import { Item, TabList, TabPanels, Tabs } from "@adobe/react-spectrum";

export default function App() {
  return (
    <div className="App">
      <Provider theme={defaultTheme} colorScheme="light">
        <Tabs aria-label="History of Ancient Rome">
          <TabList>
            <Item key="FoR">Form 1</Item>
            <Item key="MaR">Form2</Item>
          </TabList>
          <TabPanels>
            <Item key="FoR">
              <Form1 name="iam form 1" />
            </Item>
            <Item key="MaR">
              <Form2 />
            </Item>
          </TabPanels>
        </Tabs>
      </Provider>
    </div>
  );
}
