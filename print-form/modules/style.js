const styleHeader = (props) => {
  let isLanscape = 'portrait'
  if (props.landscape) {
    isLanscape = 'landscape'
  }
  return `
        <html>
            <head>
            <title>Test</title>
                <style rel="stylesheet" >
             

                * {s
                    -webkit-print-color-adjust: true;
                    -webkit-print-color-adjust: exact;
                }
                @page {
                    size: ${props.page} ${isLanscape};
                    margin: 0.75in ${props.marginX}in; 
                }

                body { 
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                table,tr,td{
                    border-collapse: collapse !important; 
                }
                table{
                width:100%;
                }
                @media print {
                    @font-face {
                        font-family: 'Niradei-Bold';
                        font-weight: bold;
                        font-display: swap;
                        font-style: normal;
                    }
                    @font-face {
                        font-family: 'Niradei-Regular';
                        font-weight: 600;
                        font-display: swap;
                        font-style: normal;
                    }
                    html, body {
                        font-family: 'Niradei-Regular', serif;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact;
                    },
                    .pagebreak {
                        page-break-inside: avoid;
                    }
                    table { page-break-after:auto }
                    tr    { page-break-inside:avoid; break-after:auto }
                    thead {display: table-row-group;}
                    h4,h2,h1,h5,h3{
                        font-family: 'Niradei-Bold', serif;
                        font-weight: 700;
                    },
                    td,span{
                        font-family: 'Niradei-Regular', serif;
                    }
                }
                .items tr td{
                    border: 0.7px solid #BBB1B1;
                    padding: 4px;
                    height: 26px;
                }
                .items_bottom th{
                    padding: 8px 6px !important ;
                    border-bottom: 1px solid  #BBB1B1;
                    border-collapse: collapse;
                    border-right: none !important;
                    border-left: none !important;
                }
                table{
                    width: 100%;
                    margin-top: 6px;
                    margin-bottom: 6px !important;
                    border-collapse: collapse;
                }
                .table_not_margin{
                    margin: 0px !important;
                }
                .form_setting table th{
                    padding: 8px 6px !important ;
                    border: 1px solid  #BBB1B1;
                    border-collapse: collapse;
                    clear: both;
                    text-transform: ${props.tableHeader};
                    font-size: ${props.styles.fontSize}px !important;
                }
                .form_setting td{
                    font-size: ${props.styles.fontSize}px !important;
                    font-family: 'Niradei-Regular';
                }
                .acc_header{
                    text-transform: ${props.tableHeader};
                    font-size: ${props.styles.fontSize}px !important;
                    padding: 8px 6px !important ;
                }
                .form_setting h2{
                    font-size: ${props.styles.headerFontSize}px !important;
                }
                .form_setting p{
                    font-size: ${props.styles.fontSize}px !important;
                }
                .items_bottom tr td{
                    border-bottom: 1px solid #BBB1B1 !important;
                    padding: 6px;
                    padding-bottom: 3px;
                    padding-top: 3px;
                    height: 26px;
                }
                .items_bottom_prepare tr td{
                    border-bottom: 1px solid #BBB1B1 !important;
                    padding: 6px;
                    padding-bottom: 3px;
                    padding-top: 3px;
                    height: 26px;
                }
                .items_bottom_prepare tr td:first-child{
                    border-top: 1px solid #BBB1B1 !important;
                }
                .items_bottom_prepare tr td:nth-child(2){
                    border-top: 1px solid #BBB1B1 !important;
                }
                .items_bottom_prepare tr td:nth-child(3){
                    border-top: 1px solid #BBB1B1 !important;
                }
                .items_bottom_line tr td{
                    border-bottom: 1px solid #BBB1B1 !important;
                    padding: 6px;
                    padding-bottom: 3px;
                    padding-top: 3px;
                    height: 26px;
                }
                .items_bottom_line tr td{
                    border-top: 1px solid #BBB1B1 !important;
                }
                .items_bottom_line th{
                    padding: 8px 6px !important ;
                    border-bottom: 1px solid  #BBB1B1;
                    border-collapse: collapse;
                    border-right: none !important;
                    border-left: none !important;
                }
                .items_tb_border tr td{
                    border: 1px solid #BBB1B1;
                    padding: 6px;
                    padding-bottom: 3px;
                    padding-top: 3px;
                    height: 26px;
                }
                .flex{
                    display: flex;
                }
                .tleft{
                    text-align: left !important;
                }
                .tright{
                    text-align: right !important;
                }
                .text-bold{
                    font-weight: bold;
                    font-family: 'Niradei-Bold' !important;
                }
                .text-center{
                    text-align: center !important;
                }
                .signature_td{
                    height: 60px !important;
                }
                .form_p{
                    font-family: 'Niradei-Regular' !important;
                }
                .mb-0{
                    margin-bottom: 0px;
                }
                .form_h2{
                    width: 100%;
                    line-height:26px !important;
                    margin-bottom: 0px !important;
                }
                #pageFooter
                {
                    page-break-before: always;
                    counter-increment: page;
                }
                #pageFooter:after
                {
                    display: block;
                    text-align: right;
                    content: "Page " counter(page);
                }
                .w50{
                    width: 50%;
                }
                .w25{
                    width: 25%;
                }
                .br {
                    display: block;
                    margin-bottom: 0em;
                }
                .p_br{
                    margin:0px !important;
                    line-height: 15px;
                }
                .b_top_bottom{
                    border-top: 1px solid #BBB1B1 !important;
                    border-bottom: 1px solid #BBB1B1 !important;
                }
                .b_bottom{
                    border-bottom: 1px solid #BBB1B1 !important;
                    margin-bottom: 5px;
                }
                .italic{
                    font-style: italic;
                }
                .bold_italic{
                    font-style: italic;
                    font-weight: bold !important;
                }
                .form_setting .p_18{
                    font-size: 18px !important; font-weight: bold; margin-bottom: 0px !important;
                }
                .mt_1{
                    margin-top: 2px;
                }
                .mt_2{
                    margin-top: 4px;
                }
                </style>
            </head>
        <body>
`
}

export {
  styleHeader
}