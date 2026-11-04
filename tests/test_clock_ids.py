import json
import os
import unittest

class TestClockIds(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'clock_ids.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_clock_ids(self):
        self.assertEqual(self.data['CLOCK_REALTIME'], 0)
        self.assertEqual(self.data['CLOCK_MONOTONIC'], 4)
        self.assertEqual(self.data['CLOCK_THREAD_CPUTIME_ID'], 16)

if __name__ == '__main__':
    unittest.main()
