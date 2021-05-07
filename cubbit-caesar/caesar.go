package main

import (
	"fmt"
	"strings"
)

const cypherMin int32 = 32
const cypherMax int32 = 125

func Encrypt(key string, message string) string {
	return encrypt(key, message, false)
}

func Decrypt(key string, message string) string {
	return encrypt(key, message, true)
}

//func encrypt(key string, message string, decryptMode bool) string {
//	chunkLength := len(key)
//	n := int32(calculateN(key))
//
//	if decryptMode {
//		n = n * -1
//	}
//
//	chunks := splitMessage(chunkLength, message)
//	reversedChunks := reverseChunks(chunks)
//	encryptedReversedChunks := encryptChunks(n, reversedChunks)
//	encryptedChunks := reverseChunks(encryptedReversedChunks)
//	return strings.Join(encryptedChunks, "")
//
//}

func encryptN(n int32, message string, decryptMode bool) string {
	if decryptMode {
		n = n * -1
	}

	//chunks := splitMessage(chunkLength, message)
	//reversedChunks := reverseChunks(chunks)
	encryptedReversedChunks := encryptChunks(n, []string{message})
	//encryptedChunks := reverseChunks(encryptedReversedChunks)
	return strings.Join(encryptedReversedChunks, "")
}

func encrypt(key string, message string, decryptMode bool) string {
	//chunkLength := len(key)
	n := int32(calculateN(key))
	return encryptN(n, message, decryptMode)
}

func encryptChunks(n int32, chunks []string) (encryptedChunks []string) {
	encryptedChunks = make([]string, 0)
	for _, e := range chunks {
		encryptedChunks = append(encryptedChunks, encryptChunk(n, e))
	}
	return encryptedChunks
}

func encryptChunk(n int32, chunk string) (encryptedChunk string) {
	encryptedChunk = ""
	for _, e := range chunk {
		encryptedChunk = encryptedChunk + string(encryptChar(n, e))
	}
	return
}

func encryptChar(n int32, e int32) uint8 {
	pos := mod(e-cypherMin+n, cypherMax-cypherMin+1)
	return uint8(pos + cypherMin)
}

func mod(a int32, b int32) int32 {
	r := a % b
	if r < 0 {
		return r + b
	} else {
		return r
	}
}

func calculateN(key string) int {

	n := 0
	for i := range key {
		n = n + int(key[i])
	}

	return n

}

func reverse(str string) (result string) {
	for _, v := range str {
		result = string(v) + result
	}
	return
}

func reverseChunks(chunks []string) (reversedChunks []string) {

	reversedChunks = make([]string, 0)
	for _, e := range chunks {
		reversedChunks = append(reversedChunks, reverse(e))
	}

	return

}

func splitMessage(length int, message string) []string {

	fullChunksNumber := len(message) / length
	lastChunkLength := len(message) % length

	var chunks = make([]string, 0)
	start := 0
	end := length

	for i := 0; i < fullChunksNumber; i++ {
		chunks = append(chunks, message[start:end])
		start = start + length
		end = end + length
	}

	if lastChunkLength > 0 {
		chunks = append(chunks, message[len(message)-lastChunkLength:])
	}

	return chunks

}

func main() {
	n := int32(65)
	fmt.Println(encryptN(n, "b-&+(2'", false))
	fmt.Println(encryptN(n, "`'..2$=%(+$>", false))
	fmt.Println(encryptN(n, "`4!!(3=s 4+3", false))
	fmt.Println(encryptN(n, "^#5 -\"$#=.-+(-$=%(+$=$-\"18/3(.-= -#=#$\"18/3(.-K=p$\"41$= -8=%(+$=38/$= -#=, (-3 (-=8.41=/1(5 \"8>", false))
	fmt.Println(encryptN(n, "q'$=6'.+$=(2=-$5$1=3'$=24,=.%=3'$=/ 132=J=(3=(2=&1$ 3$1=.1=+$22$1I=#$/$-#(-&=.-='.6=6$++=3'$=(-#(5(#4 +2=6.1*=3.&$3'$1", false))
}
