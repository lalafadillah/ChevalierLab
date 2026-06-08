    const umur = 21;

    // If Else Statement
    if(umur >= 17) {
        console.log('Kamu sudah boleh buat KTP');
    }else if(umur >= 20){
        console.log('Kamu sudah boleh buat SIM');
    }else{
        console.log('Kamu belum boleh buat KTP dan SIM');
    }
    // Switch Case Statement
    switch(umur){
        case 17:
            console.log('Kamu sudah boleh buat KTP');
            break;
        case 20:
            console.log('Kamu sudah boleh buat SIM');
            break;
        default:
            console.log('Kamu belum boleh buat KTP dan SIM');
            break;
    }
    // Ternary Operator
    const status = umur >= 17? 'Kamu sudah boleh buat KTP': 'Kamu belum boleh buat KΤΡ';
    // output: Kamu sudah boleh buat KTP