'use strict';

System.register(['lodash', '../timeseries'], function (_export, _context) {
  "use strict";

  var _, ts, datapoints, series_set, growing_series;

  return {
    setters: [function (_lodash) {
      _ = _lodash.default;
    }, function (_timeseries) {
      ts = _timeseries.default;
    }],
    execute: function () {
      datapoints = [[10.7104, 1498409636085], [10.578, 1498409651011], [10.5985, 1498409666628], [10.6877, 1498409681525], [10.5495, 1498409696586], [10.5981, 1498409711009], [10.5076, 1498409726949], [11.4807, 1498409741853], [11.6165, 1498409756165], [11.8575, 1498409771018], [11.9936, 1498409786056], [10.7566, 1498409801942], [10.7484, 1498409816010], [10.6038, 1498409831018], [10.2932, 1498409846010], [10.4912, 1498409861946], [10.4151, 1498409876871], [10.2401, 1498409891710], [10.4921, 1498409906143], [10.4413, 1498409921477], [10.6318, 1498409936147], [10.5277, 1498409951915], [10.6333, 1498409966052], [10.6417, 1498409981944], [10.4505, 1498409996867], [10.5812, 1498410011770], [10.4934, 1498410026573], [10.5731, 1498410041317], [10.5, 1498410056213], [10.6505, 1498410071013], [9.4035, 1498410086387]];
      series_set = [[[1.0247, 1498409631773], [0.9988, 1498409646697], [0.9817, 1498409661239], [0.9569, 1498409676045], [1.0331, 1498409691922], [1.0755, 1498409706546], [1.1862, 1498409721525], [1.2984, 1498409736175], [1.2389, 1498409751817], [1.1452, 1498409766783], [1.102, 1498409781699], [0.9647, 1498409796664], [1.0063, 1498409811627], [1.0318, 1498409826887], [1.065, 1498409841645], [1.0907, 1498409856647], [1.0229, 1498409871521], [1.0654, 1498409886031], [1.0568, 1498409901544], [1.0818, 1498409916194], [1.1335, 1498409931672], [1.057, 1498409946673], [1.0243, 1498409961669], [1.0329, 1498409976637], [1.1428, 1498409991563], [1.2198, 1498410006441], [1.2192, 1498410021230], [1.2615, 1498410036027], [1.1765, 1498410051907], [1.2352, 1498410066109], [1.0557, 1498410081043]], [[10.7104, 1498409636085], [10.578, 1498409651011], [10.5985, 1498409666628], [10.6877, 1498409681525], [10.5495, 1498409696586], [10.5981, 1498409711009], [10.5076, 1498409726949], [11.4807, 1498409741853], [11.6165, 1498409756165], [11.8575, 1498409771018], [11.9936, 1498409786056], [10.7566, 1498409801942], [10.7484, 1498409816010], [10.6038, 1498409831018], [10.2932, 1498409846010], [10.4912, 1498409861946], [10.4151, 1498409876871], [10.2401, 1498409891710], [10.4921, 1498409906143], [10.4413, 1498409921477], [10.6318, 1498409936147], [10.5277, 1498409951915], [10.6333, 1498409966052], [10.6417, 1498409981944], [10.4505, 1498409996867], [10.5812, 1498410011770], [10.4934, 1498410026573], [10.5731, 1498410041317], [10.5, 1498410056213], [10.6505, 1498410071013], [9.4035, 1498410086387]]];
      growing_series = [[10755200, 1498332216642], [10761200, 1498332276802], [10767200, 1498332336367], [10773200, 1498332396584], [10779200, 1498332456880], [10785200, 1498332516479], [10791200, 1498332576610], [10797200, 1498332636353], [10803200, 1498332696513], [10809200, 1498332756884], [10815200, 1498332816890], [10821200, 1498332876305], [10827200, 1498332936384], [10833200, 1498332996659], [10839200, 1498333056965], [10845200, 1498333116748], [10851200, 1498333176687], [10857200, 1498333236646], [10863200, 1498333297034], [10869200, 1498333356358], [10875200, 1498333416445], [4800, 1498333536686], [17900, 1498333667962], [24000, 1498333729157], [29500, 1498333783662], [34800, 1498333836813], [40700, 1498333896403], [46800, 1498333956953], [52800, 1498334016976], [6000, 1498334136593], [12000, 1498334196567]];


      module.exports = [{
        name: 'groupBy',
        tests: {
          'groupBy(AVERAGE)': function groupByAVERAGE() {
            ts.groupBy(datapoints, '5m', ts.AVERAGE);
          },
          'groupBy(MAX)': function groupByMAX() {
            ts.groupBy(datapoints, '5m', ts.COUNT);
          }
        }
      }, {
        name: 'sumSeries',
        tests: {
          'sumSeries()': function sumSeries() {
            ts.sumSeries(series_set);
          },
          'groupBy(MAX)->sumSeries()': function groupByMAXSumSeries() {
            var prepeared_series = _.map(series_set, function (datapoints) {
              return ts.groupBy(datapoints, '5m', ts.MAX);
            });
            ts.sumSeries(prepeared_series);
          }
        }
      }, {
        name: 'delta vs rate',
        tests: {
          'delta()': function delta() {
            ts.delta(growing_series);
          },
          'rate()': function rate() {
            ts.rate(growing_series);
          }
        }
      }, {
        name: 'scale',
        tests: {
          'scale()': function scale() {
            ts.scale(datapoints, 42);
          },
          'scale_perf()': function scale_perf() {
            ts.scale_perf(datapoints, 42);
          }
        }
      }, {
        name: 'groupBy vs groupBy_perf',
        tests: {
          'groupBy()': function groupBy() {
            ts.groupBy(datapoints, '5m', ts.AVERAGE);
          },
          'groupBy_perf()': function groupBy_perf() {
            ts.groupBy_perf(datapoints, '5m', ts.AVERAGE);
          }
        }
      }];
    }
  };
});
//# sourceMappingURL=timeseries_bench.js.map
