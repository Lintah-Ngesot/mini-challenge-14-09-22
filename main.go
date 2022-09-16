package main

// PAD => price after discount
// PBD => price before discount

import "fmt"

var PBD int
var discount int
var getDiscount int
var PAD int

func DumbWMerchBerkah() {
	discount = 25
	getDiscount = PBD - (PBD * discount / 100)

	if getDiscount >= 20000 {
		getDiscount = 20000
	}
}

func DumbMerchMurahBanget() {
	discount = 50
	getDiscount = PBD - (PBD * discount / 100)

	if getDiscount >= 45000 {
		getDiscount = 45000
	}
}

func main() {
	fmt.Println("Enter Sub Total Payment:")
	fmt.Scanf("%d", &PBD)
	if PBD >= 50000 && PBD < 70000 {
		DumbWMerchBerkah()
		fmt.Println("Your Voucher Discount: DumbWMerchBerkah")
	} else if PBD >= 70000 {
		DumbMerchMurahBanget()
		fmt.Println("Your Voucher Discount: DumbMerchMurahBanget")
	} else {
		getDiscount = 0
	}
	PAD = PBD - getDiscount
	fmt.Println("Discount :", discount, "%")
	fmt.Println("Discount Price :", getDiscount)
	fmt.Println("Total Payment: Rp. ", PAD)
}
