import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ReactTabs.css'

function ReactTabs() {
  return (
      <Tabs>
          <TabList>
              <div className='our-btns'>
                  <Tab>
                      <button className="our-btn">Ламинатные тубы</button>
                  </Tab>
                  <Tab>
                      <button className="our-btn">Экструзионные тубы</button>
                  </Tab>
                  <Tab>
                      <button className="our-btn">Другая упаковка</button>
                  </Tab>
              </div>
          </TabList>

          <TabPanel>
              <div className="our-imagess">
                  <div className="our-images">
                      <img className="our-img" src="https://lean-group-tau.vercel.app/product-1.png" alt="" />
                  </div>
                  <div className="our-images">
                      <img src="https://lean-group-tau.vercel.app/product-2.png" alt="" />
                  </div>
                  <div className="our-images">
                      <img src="https://lean-group-tau.vercel.app/product-3.png" alt="" />
                  </div>
                  <div className="our-images">
                      <img src="https://lean-group-tau.vercel.app/product-4.png" alt="" />
                  </div>
                  <div className="our-images">
                      <img src="https://lean-group-tau.vercel.app/product-5.png" alt="" />
                  </div>
              </div>
          </TabPanel>
          <TabPanel>
              <div className="our-imagess">
                  <div className="our-images">
                      <img className="our-img" src="https://lean-group-tau.vercel.app/product-2.png" alt="" />
                  </div>
                  <div className="our-images">
                      <img src="https://lean-group-tau.vercel.app/product-5.png" alt="" />
                  </div>
                  <div className="our-images">
                      <img src="https://lean-group-tau.vercel.app/product-4.png" alt="" />
                  </div>
                  <div className="our-images">
                      <img src="https://lean-group-tau.vercel.app/product-3.png" alt="" />
                  </div>
                  <div className="our-images">
                      <img src="https://lean-group-tau.vercel.app/product-1.png" alt="" />
                  </div>
              </div>
          </TabPanel>
          <TabPanel>
              <div className="our-imagess">
                  <div className="our-images">
                      <img className="our-img" src="https://lean-group-tau.vercel.app/product-5.png" alt="" />
                  </div>
                  <div className="our-images">
                      <img src="https://lean-group-tau.vercel.app/product-4.png" alt="" />
                  </div>
                  <div className="our-images">
                      <img src="https://lean-group-tau.vercel.app/product-3.png" alt="" />
                  </div>
                  <div className="our-images">
                      <img src="https://lean-group-tau.vercel.app/product-2.png" alt="" />
                  </div>
                  <div className="our-images">
                      <img src="https://lean-group-tau.vercel.app/product-1.png" alt="" />
                  </div>
              </div>
          </TabPanel>
      </Tabs>
  )
}

export default ReactTabs