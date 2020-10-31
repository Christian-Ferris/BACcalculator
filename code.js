$(document).ready(
    function () {
        $("button").click(calculate);

        function calculate() {
            //gather input for id="beers"
            var beers = $("#beers").val();
            beers = parseInt(beers);

            //gather input for id="wine"
            var wine = $("#wine").val();
            wine = parseInt(wine);

            //gather input for id="shots"
            var shots = $("#shots").val();
            shots = parseInt(shots);

            //gather input for id="weight"
            var weight = $("#weight").val();
            weight = parseFloat(weight);

            //gather input for id="hours"
            var hours = $("#hours").val();
            hours = parseFloat(hours);

            /*
            PERFORM CALCULATIONS AND DISPLAY OUTPUT
            */

            //beer liquid oz
            var beerLiquidOz = beers*0.54;

            //wine liquid oz
            var wineLiquidOz = wine*0.6;

            //shots liquid oz
            var shotsLiquidOz = shots*0.6;

            //total liquid oz consumed
            var totalOz = beerLiquidOz+wineLiquidOz+shotsLiquidOz;

            //multiply by 7.5 (average alc absorption rate)
            var absorbRate = totalOz*7.5;

            //divide by person's weight
            var preBAC = absorbRate/weight;

            //subtract 0.015 for each hour since their first drink
            var BAC = preBAC-(hours*0.015);

            //display with three decimal places


            //update span text to BAC
            $("#BAC").text(BAC.toFixed(3));

            //unhide results
            $(".output").show();
        }
    }
)