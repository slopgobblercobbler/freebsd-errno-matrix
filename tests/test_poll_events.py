import json
import os
import unittest

class TestPollEvents(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'poll_events_matrix.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_poll_values(self):
        self.assertEqual(int(self.data['POLLIN'], 16), 1)
        self.assertEqual(int(self.data['POLLOUT'], 16), 4)
        self.assertEqual(int(self.data['POLLERR'], 16), 8)

if __name__ == '__main__':
    unittest.main()
