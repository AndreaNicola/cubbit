package main

import (
	"testing"
)

func TestEncrypt(t *testing.T) {

	var key = "fullstack"
	var texts = []string{"titanic", "minecraft", "javascript"}
	var results = []string{"3(3 -(\"", ",(-$\"1 %3", ") 5 2\"1(/3"}

	for i, text := range texts {
		encryptedText := Encrypt(key, text)
		if encryptedText != results[i] {
			t.Errorf("Encrypt(\"%s\", \"%s\") got %s instead of %s", key, text, encryptedText, results[i])
		}
	}

}

func TestDecrypt(t *testing.T) {

	var key = "fullstack"
	var texts = []string{"titanic", "minecraft", "javascript"}
	var results = []string{"3(3 -(\"", ",(-$\"1 %3", ") 5 2\"1(/3"}

	for i, text := range results {
		decryptedText := Decrypt(key, text)
		if decryptedText != texts[i] {
			t.Errorf("Decrypt(\"%s\", \"%s\") got %s instead of %s", key, text, decryptedText, texts[i])
		}
	}

}
