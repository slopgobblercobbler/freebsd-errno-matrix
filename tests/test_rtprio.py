import json
import os
import unittest

class TestRtprio(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'rtprio_scheduling_classes.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_rtprio(self):
        self.assertEqual(self.data['RTP_PRIO_REALTIME'], 2)
        self.assertEqual(self.data['RTP_PRIO_MAX'], 31)

if __name__ == '__main__':
    unittest.main()
