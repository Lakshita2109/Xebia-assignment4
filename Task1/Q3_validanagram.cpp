#include <iostream>
#include <unordered_map>
#include <cctype>
using namespace std;

bool isAnagram(string s1, string s2) {
    unordered_map<char, int> freq;

    for (char ch : s1) {
        if (ch != ' ') {
            freq[tolower(ch)]++;
        }
    }

    for (char ch : s2) {
        if (ch != ' ') {
            freq[tolower(ch)]--;
        }
    }

    for (auto& entry : freq) {
        if (entry.second != 0) {
            return false;
        }
    }

    return true;
}

int main() {
    cout << boolalpha;
    cout << isAnagram("Listen", "Silent");

    return 0;
}