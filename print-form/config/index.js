const setting = (name, nameKh, logo = false, option = 3) => {
  return {
    title: {
      en: {
        name: name,
        status: true
      },
      kh: {
        name: nameKh,
        status: false
      }
    },
    logo: {
      width: 80,
      height: 80,
      position: 'center',
      hide: logo,
      isPrimary: true
    },
    header: false,
    page: 'A4',
    landscape: false,
    c_name: true,
    c_name_kh: false,
    form_number: 1,
    table_header: 1,
    customer_address_option: 1,
    customer_address_line: 1,
    margin: 59,
    fontSize: 12,
    headerFontSize: 22,
    companyFontSize: 18,
    color: {
      background: '#ed1a3a',
      color: '#ffffff'
    },
    signature: {
      prepared_by: {
        status: true,
        text: 'Prepare By',
        text_kh: 'រៀបចំដោយ'
      },
      reviewed_by: {
        status: true,
        text: 'Reviewed By',
        text_kh: 'ត្រួតពិនិត្យដោយ'
      },
      verified_by: {
        status: true,
        text: 'Approverd By',
        text_kh: 'សំរេចដោយ'
      },
      approved_by: {
        status: false,
        text: 'Recorded By',
        text_kh: 'ទូទាត់ដោយ'
      },
      recorded_by: {
        status: false,
        text: 'Received By',
        text_kh: 'ទទួលដោយ'
      },
      option: option,
      position: true
    },
    column: {
      one: false,
      two: true,
      three: true,
      four: true,
      five: true,
      six: true,
      seven: false,
      eight: true,
      nine: false,
      ten: false,
      ten1: false,
      ten2: false,
      ten3: false,
      ten4: false,
      ten5: false,
      ten6: false,
      ten7: false,
      ten8: false
    },
    language: 'English',
    address: {
      title: 'St, 120 Phnom Penh',
      align: 'center'
    },
    background2: '#F8F8F9',
    color2: '#000000',
    background3: '#d0cece',
    color3: '#000000',
    discount: true,
    subTotal: false,
    tax: false,
    exchangeRate: true,
    vattin: false,
    positionText: 'Signature',
    positionTextKH: 'ហត្ថលេខា',
    note: 'Acceptance of this order is expressly limited to the terms and conditions of the order.',
    noteKH: 'Acceptance of this order is expressly limited to the terms and conditions of the order.'
  }
}



export {
  setting
}