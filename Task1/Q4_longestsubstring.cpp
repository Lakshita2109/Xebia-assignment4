#include <iostream>
#include <unordered_map>
using namespace std;

int lengthOfLongestSubstring(string s) {
    unordered_map<char, int> lastSeen;

    int left = 0;
    int maxLength = 0;

    for (int right = 0; right < s.length(); right++) {

        if (lastSeen.count(s[right]) &&
            lastSeen[s[right]] >= left) {

            left = lastSeen[s[right]] + 1;
        }

        lastSeen[s[right]] = right;

        maxLength = max(maxLength, right - left + 1);
    }

    return maxLength;
}

int main() {
    cout << lengthOfLongestSubstring("abcabcbb");
    return 0;
}