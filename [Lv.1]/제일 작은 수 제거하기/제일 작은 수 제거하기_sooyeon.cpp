#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> arr) {
    if (arr.size() == 1) {
        return {-1};
    }
    vector<int> answer;
    int min_val = *std::min_element(arr.begin(), arr.end());
    for (int v : arr) {
        if (v > min_val) {
            answer.push_back(v);
        }
    }
    return answer;
}
