import { styleHeader } from "./style";
var table_header = "capitalize";
var marginX = 0.75;
var styles = {};
const Header = (page, landscape = false) => {
  let props = {
    page: page,
    marginX: marginX,
    styles: styles,
    tableHeader: table_header,
    landscape: landscape,
  };
  return styleHeader(props);
};
// const onText = (languageSetting, textEng,textNative , isBreak = true)=> {
//     if(isBreak){
//         return  languageSetting == languageConfig.en ?  '<span>'+ textEng +'</span>' : languageSetting == languageConfig.native ?  '<span>'+ textNative+'</span>' :  `<p style="margin:0px;line-height: 15px;">${textNative}</p><p style="margin:0px;line-height: 14px;">${textEng}</p>`
//     } else {
//         return  languageSetting == languageConfig.en ?  '<span>'+ textEng+ '</span>' : languageSetting == languageConfig.native ?  '<span>'+textNative+'</span>':  '<span>'+ textNative + ' '+ textEng +'</span>'
//     }

//  }
const Footer = `</body></html>`;

const content = (data, type, setting) => {
  console.log("setting==", setting);
  var logo_postion = "";
  let center_text = "";
  let m_left = "";
  let m_right = "";
  let m_top = "";
  let address_center_log_left = "";
  marginX = setting.margin / 100;
  styles.fontSize = setting.fontSize;
  styles.headerFontSize = setting.headerFontSize;
  if (setting.table_header == 1) {
    table_header = "uppercase";
  } else {
    table_header = "capitalize";
  }
  if (setting.logo.position == "center") {
    logo_postion =
      "flex-direction: column;justify-content: center;align-items: center;";
    center_text = "text-align:center !important";
    m_top = "margin-top:0px";
  } else if (setting.logo.position == "right") {
    logo_postion = "flex-direction: row-reverse;";
    center_text = "text-align:right !important";
    m_left = "margin-left: 20px";
    m_right = "margin-right:0px";
    m_top = "margin-top: 8px";
  } else {
    m_right = "margin-right:10px";
    m_top = "margin-top:8px";
  }
  if (setting.address.align == "center") {
    center_text = "text-align:center !important";
    address_center_log_left = true;
  } else if (setting.address.align == "left") {
    center_text = "text-align:left !important";
    address_center_log_left = false;
  } else {
    center_text = "text-align:right !important";
    address_center_log_left = true;
  }
  let hide_logo = "";
  if (setting.logo.hide) {
    hide_logo = "display:none;";
  }
  let is_header = "";
  if (setting.header) {
    is_header = "display:none;";
  }
  return ` 
      ${Header(setting.page, setting.landscape)}
   
       <div class="form_setting">
              <div  style="display: flex; ${logo_postion}">
                  <div style="${m_left}; ${hide_logo}; ${m_right};${
    address_center_log_left ? "flex:1" : ""
  }">
                     
                  </div>
                  <div  style="flex:4; ${is_header}">
                      <div class="">
                          
                      </div>
                  </div>
                  ${
                    address_center_log_left
                      ? `<div style="flex:1;${hide_logo}"></div>`
                      : ""
                  }
              </div>
              <div  style="display:flex;margin-top: 12px;">
                  <div>
         
                  </div>
                  <div style="flex: 2">
 
                      
                  </div>
              </div>
              <div style="margin-top: 12px;">
                  <table class="items_bottom_line table_not_margin">
                  <thead>
                  <tr>
                      <th>AAA</th>
                      <th>BBB</th>
                      <th>CCC</th>
                      <th>DDD</th>
                  </tr>
              </thead>
              <tbody>
              <tr>
                <td>aaa</td>
                <td>aaa</td>
                <td>aaa</td>
                <td>aaa</td>
              </tr>
        
              </tbody>
                  </table>
              </div>
              <div style="margin-top: 12px;">
                  <table class="items_bottom" style="margin-top:0px !important;margin-bottom:0px !important">
                      <thead>
                          <tr>
                              <th>AAA</th>
                              <th>BBB</th>
                              <th>CCC</th>
                              <th>DDD</th>
                          </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>aaa</td>
                        <td>aaa</td>
                        <td>aaa</td>
                        <td>aaa</td>
                      </tr>
                
                      </tbody>
                  </table>
              </div>
  
              </div>
              <div style="margin-top: 12px;">
      
              </div>
       </div>
    
     ${Footer}
   `;
};

export { content };
