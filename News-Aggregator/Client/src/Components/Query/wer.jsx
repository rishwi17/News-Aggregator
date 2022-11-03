#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);



/*
 * Complete the 'makeSandwiches' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER breads
 *  2. INTEGER eggSlice
 */

vector<int> makeSandwiches(int breads, int eggSlice) {
    int  kings = 0;
    vector <int> anss;
    
    while(breads > 0){
        int regular = breads % 2;
        if( eggSlice == kings + regular){
            anss.push_back(kings);
            anss.push_back(regular);
            return anss;
        }
        else{
            kings++;
            breads = breads - 4;
        }
    }
    return anss;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string breads_temp;
    getline(cin, breads_temp);

    int breads = stoi(ltrim(rtrim(breads_temp)));

    string eggSlice_temp;
    getline(cin, eggSlice_temp);

    int eggSlice = stoi(ltrim(rtrim(eggSlice_temp)));

    vector<int> result = makeSandwiches(breads, eggSlice);

    for (size_t i = 0; i < result.size(); i++) {
        fout << result[i];

        if (i != result.size() - 1) {
            fout << "\n";
        }
    }

    fout << "\n";

    fout.close();

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}
