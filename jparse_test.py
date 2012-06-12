#! /usr/bin/python
import jparse
import unittest

class TestSequenceFunctions(unittest.TestCase):

    def test_npoints(self):
        self.assertEqual(jparse.npoint(2, 1, 1, 2), 0)
        self.assertEqual(jparse.npoint(2, 1, 1, 0), 2)
        self.assertEqual(jparse.npoint(1, 1, 0, 0), 1)
        self.assertEqual(jparse.npoint(1, 2, 1, 2), 3)
        self.assertEqual(jparse.npoint(0, 1, 0, 2), 1)
        self.assertEqual(jparse.npoint(0, 1, 0, 3), 1)
        self.assertEqual(jparse.npoint(0, 1, 1, 0), 0)

    def test_key_and_val(self):
        d = dict(a=10, b=42, c="b")
        self.assertTrue(jparse.key_and_val(d, "a", 10))
        self.assertFalse(jparse.key_and_val(d, "a", 12))
        self.assertFalse(jparse.key_and_val(d, "q", 12))
        self.assertTrue(jparse.key_and_val(d, "c", "b"))
        
    def test_getexpwin(self):
        def prob_to_tbl(prob):
            wt = jparse.getexpwin(prob)
            wintbl = [[0.0 for x in xrange(4)] for x in xrange(4)]
            for el in wt:
                wintbl[el[1]][el[2]]=el[0]
            return wintbl
        prob = [[0.0 for x in xrange(4)] for x in xrange(4)]
        
        prob[1][1]=1.0
        wintbl = prob_to_tbl(prob)
        self.assertEqual(wintbl, [[1.0, 0.0, 0.0, 0.0],
                                  [0.0, 3.0, 0.0, 0.0],
                                  [0.0, 0.0, 1.0, 0.0],
                                  [0.0, 0.0, 0.0, 1.0]])

        prob = [[0.0 for x in xrange(4)] for x in xrange(4)]
        prob[0][0]=1.0
        wintbl = prob_to_tbl(prob)
        self.assertEqual(wintbl, [[3.0, 0.0, 0.0, 0.0],
                                  [0.0, 1.0, 0.0, 0.0],
                                  [0.0, 0.0, 1.0, 0.0],
                                  [0.0, 0.0, 0.0, 1.0]])

        prob = [[0.0 for x in xrange(4)] for x in xrange(4)]
        prob[1][0]=1.0
        wintbl = prob_to_tbl(prob)
        self.assertEqual(wintbl, [[0.0, 0.0, 0.0, 0.0],
                                  [3.0, 0.0, 0.0, 0.0],
                                  [1.0, 2.0, 0.0, 0.0],
                                  [1.0, 1.0, 2.0, 0.0]])

        prob = [[0.0 for x in xrange(4)] for x in xrange(4)]
        prob[0][1]=1.0
        wintbl = prob_to_tbl(prob)
        self.assertEqual(wintbl, [[0.0, 3.0, 1.0, 1.0],
                                  [0.0, 0.0, 2.0, 1.0],
                                  [0.0, 0.0, 0.0, 2.0],
                                  [0.0, 0.0, 0.0, 0.0]])

        prob = [[0.0 for x in xrange(4)] for x in xrange(4)]
        prob[0][1]=0.5
        prob[1][0]=0.5
        wintbl = prob_to_tbl(prob)
        self.assertEqual(wintbl, [[0.0, 1.5, 0.5, 0.5],
                                  [1.5, 0.0, 1.0, 0.5],
                                  [0.5, 1.0, 0.0, 1.0],
                                  [0.5, 0.5, 1.0, 0.0]])



if __name__ == '__main__':
    unittest.main()
