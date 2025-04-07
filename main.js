/*
 * Copyright 2025 Tushar Kumar Sahu
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


onload = () => {
    const form = document.getElementById("form");
    const convertButton = document.getElementById("convert-btn");
    const output = document.getElementById("output");

    function convertToRoman(num) {
        const ref = [
            ['M', 1000],
            ['CM', 900],
            ['D', 500],
            ['CD', 400],
            ['C', 100],
            ['XC', 90],
            ['L', 50],
            ['XL', 40],
            ['X', 10],
            ['IX', 9],
            ['V', 5],
            ['IV', 4],
            ['I', 1]
        ];

        let roman = '';

        for (const arr of ref) {
            while (num >= arr[1]) {
                roman += arr[0];
                num -= arr[1];
            }
        }

        return roman;
    }

    function isValid(str, int) {
        let errText = '';

        if (!str || str.match(/[e.]/g)) {
            errText = "Please enter a valid number";
        } else if (int < 1) {
            errText = "Please enter a number greater than or equal to 1";
        } else if (int > 3999) {
            errText = "Please enter a number less than or equal to 3999";
        } else {
            return true;
        }

        output.innerText = errText;
        output.classList.add("alert");

        return false;
    }

    const clearOutput = () => {
        output.innerText = "";
        output.classList.remove("alert");
    }


    form.addEventListener("submit", e => {
        e.preventDefault();
        updateUI();
    });


    convertButton.addEventListener("click", updateUI)


    function updateUI() {
        const input = document.getElementById("number").value;
        const int = parseInt(input, 10);

        output.classList.remove("hidden");

        clearOutput();

        if (isValid(input, int)) {

            output.innerText = convertToRoman(int);

        }
    }
}
